const bcrypt = require('bcrypt');
const { UserModel } = require('../db/models');

// Controller to register a new user
const registerUser = async (req, res) => {
 try {
  const { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ where: { username, email } });
  if (existingUser) {
   return res.status(400).json({ message: 'Username or email already in use' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserModel.create({ username, email, password: hashedPassword });
  res.status(201).json(newUser);
 } catch (error) {
    res.status(500).json({ message: 'Failed to register a new user', error });
   }
}

// Controller to log in

// Controller to log out

module.exports = { registerUser };