const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  visibility: { type: String, required: true },
  members: { type: Array, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Workspace', workspaceSchema);

// app.post("/wc", async (req, res) => {
//   try {
//     const { title, visibility } = req.body;
//     const data = new User({ title, visibility });

//     await data.save();
//     console.log('Record inserted successfully');
//     res.redirect('wc.html');
//   } catch (err) {
//     console.error('Error inserting record:', err);
//     res.status(500).send('Error inserting record');
//   }
// });

// app.post("/workspaces", async (req, res) => {
//   try {
//     const { name, type, description } = req.body;
//     const workspace = new Workspace({ name, type, description });

//     await workspace.save();
//     console.log('Workspace inserted successfully');
//     res.redirect('workspaces.html');
//   } catch (err) {
//     console.error('Error inserting workspace:', err);
//     res.status(500).send('Error inserting workspace');
//   }
// });

// app.get("/", (req, res) => {
//   res.set({
//     "Access-Control-Allow-Origin": '*'
//   });
//   res.redirect('index.html');
// });

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });
