 
const db = require('../../data/db-config.js');
const {findById} = './users/user-model';



module.exports = (req, res, next) => {
    const userIdExists = req.body;
    findById(userIdExists)
    .then(user => {
      if (user === undefined) {
        next();
      } else {
        res.status(400).json({ error: "User exists" });
      }
    });
  }