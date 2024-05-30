const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/userRoutes');
const errorMiddleware = require("./middleware/error")

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
});

if(process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '../Frontend-Trello/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend-Trello/dist', 'index.html'));
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

// Middleware for error
app.use(errorMiddleware);