const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: '../.env.development.local' });

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Error in connecting to database:', error));

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  visibility: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String }
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

app.post("/wc", async (req, res) => {
  try {
    const { title, visibility } = req.body;
    const data = new User({ title, visibility });

    await data.save();
    console.log('Record inserted successfully');
    res.redirect('wc.html');
  } catch (err) {
    console.error('Error inserting record:', err);
    res.status(500).send('Error inserting record');
  }
});

app.post("/workspaces", async (req, res) => {
  try {
    const { name, type, description } = req.body;
    const workspace = new Workspace({ name, type, description });

    await workspace.save();
    console.log('Workspace inserted successfully');
    res.redirect('workspaces.html');
  } catch (err) {
    console.error('Error inserting workspace:', err);
    res.status(500).send('Error inserting workspace');
  }
});

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": '*'
  });
  res.redirect('index.html');
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
