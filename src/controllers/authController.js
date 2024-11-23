const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../db/models');

// Controller to register a new user
const registerUser = async (req, res) => {
 try {
  const { username, email, password } = req.body;

  const user = await UserModel.findOne({ where: { email } });
  if (user) {
   return res.status(400).json({ message: 'Username or email already in use' });
  }

  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserModel.create({ username, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully', newUser });
 } catch (error) {
    res.status(500).json({ message: 'Failed to register a new user', error });
   }
}

// Controller to log in
const logInUser = async (req, res) => {
 try {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ where: { email } });
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!user || !isPasswordValid) {
   return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Generate a JWT
  const token = jwt.sign({ id: user.id, email: user.email }, 'secret', { expiresIn: '1h' });

  res.status(200).json({ message: 'Log in succesfully', token, user });
 } catch (error) {
    res.status(500).json({ message: 'Error in log in', error });
 }
}

// Controller to log out

module.exports = { registerUser, logInUser };