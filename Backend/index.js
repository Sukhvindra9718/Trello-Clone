const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoutes');
// const boardRoute = require('./routes/board');
// const listRoute = require('./routes/list');
// const cardRoute = require('./routes/card');
// const { verifyToken } = require('./middleware/verifyToken');

dotenv.config({ path: './Backend/.env.development.local' });


// Connect to DB

mongoose.connect(process.env.DB_CONNECT, {})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(express.json());
app.use(cors());

// Route Middleware
app.use('/api/user', authRoute);
// app.use('/api/board', verifyToken, boardRoute);
// app.use('/api/list', verifyToken, listRoute);
// app.use('/api/card', verifyToken, cardRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Event listener for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // exit with failure
  // Optionally, you can perform additional cleanup or logging here
});

app.listen(5000, () => console.log('Server is running on port 5000'));

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // Optionally, you can perform additional cleanup or logging here
  // handlePromise rejection(err); 

  // If you don't handle the exception, the application will crash then give code
  // process.exit(1);

});

if(process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });
}else{
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}
// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  server.close(() => {
    console.log('Server has shut down.');
    process.exit(0);
  });
});