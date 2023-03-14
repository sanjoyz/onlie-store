const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer aqq12313
    if (!token) {
      return res.status(401).json({ message: 'Not authorized' })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    // add field user to req so it will available elsewhere
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Not authorized' })
  }
}
