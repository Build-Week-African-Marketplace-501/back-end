const db = require('../../data/db-config')


const usernameIsUnique = (req, res, next) =>{
  
    usernameIsUnique.findBy(req.body.username)
   .then(user => {
     if (user === undefined) {
       next();
     } else {
       res.status(400).json({ error: "User does not exists" });
     }
   });

 }






 module.export = {
usernameIsUnique,

 }