function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({ errorMessage: 'Missing user data' })
  } else if (!req.body.username || !req.body.password) {
    res
      .status(400)
      .json({ errorMessage: "Please provide  the following info {username:'', password:''}" })
  } else {
    next()
  }
}

module.exports = {
  validateUser,
}
