const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  boardTitle: {
    type: String,
    required: true,
  },
  boardVisibility: {
    type: String,
    required: true
  },
  boardMembers: {
    type: Array,
    default: []
  },
  boardCreatedAt: {
    type: Date,
    default: Date.now
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace'
  }
});

module.exports = mongoose.model('Board', boardSchema);

// app.post("/bc", async (req, res) => {
//   try {
//     const { title, visibility } = req.body;
//     const data = new User({ title, visibility });

//     await data.save();
//     console.log('Record inserted successfully');
//     res.redirect('bc.html');
//   } catch (err) {
//     console.error('Error inserting record:', err);
//     res.status(500).send('Error inserting record');
//   }
// });


// app.get("/", (req, res) => {
//   res.set({
//     "Access-Control-Allow-Origin": '*'
//   });
//   res.redirect('index.html');
// });
