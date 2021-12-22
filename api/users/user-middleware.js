const db = require('../../data/db-config')


const usernameIsUnique = (req, res, next) =>{
  
    db.findBy(req.body.username)
   .then(user => {
     if (user === undefined) {
       next();
     } else {
       next({status:400,  message: "User does not exists" });
     }
   });

 }






 module.export = {
usernameIsUnique,

 }