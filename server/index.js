// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/name-collector', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  buttons: [String],
});

const User = mongoose.model('User', userSchema);

// Route to save the user name
app.post('/save-name', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name is required.');

  // Check if user already exists
  let user = await User.findOne({ name });
  if (!user) {
    user = new User({ name });
    await user.save();
  }
  res.send('Name saved.');
});

// Route to save button clicks
app.post('/save-button', async (req, res) => {
  const { label } = req.body;
  const name = req.headers['user-name'];
  if (!label) return res.status(400).send('Button label is required.');
  if (!name) return res.status(400).send('User name is required.');

  const user = await User.findOne({ name });
  if (!user) return res.status(400).send('User not found.');

  user.buttons.push(label);
  await user.save();
  res.send('Button saved.');
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
