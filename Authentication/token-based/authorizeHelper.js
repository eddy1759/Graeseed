// Define a middleware function to check the user's role
function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.roles === role) {
        next(); // Grant access to the protected resource
      } else {
        res.status(403).json({ message: 'Forbidden Access' });
      }
    };
  }

module.exports = checkRole;