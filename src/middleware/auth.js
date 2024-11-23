const authenticateUser = (req, res, next) => {
 if (!req.session.userId) {
  return res.status(401).json({ message: 'Not Authorized' });
 }

 next();
}

module.exports = authenticateUser;