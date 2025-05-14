const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const path = require('path');

// const app= express();

// let button = document.querySelector('.Submit');
//  button.addEventListener('click',func);

// Function for Registration functionality
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashed });
    res.status(201).json(user);
  } catch {
    res.status(400).json({ message: 'User already exists' });
  }
};

// Function for Login functionality 
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};

// Function for Profile updation functionality
exports.updateProfile = async (req, res) => {
  const { name , email} = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { name  , email}, { new: true });
  res.json(user);
};



// app.get('/',(req,res) => {
//     const filepath = path.resolve(__dirname,'index.html');
//     res.sendFile(filepath);
// });