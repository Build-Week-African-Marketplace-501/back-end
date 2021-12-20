const router = require("express").Router();
const {validateUser} = require('./user-middleware');
const Users = require("./user-model.js");

// will add a restricted modules
router.get("/users",  (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// will add a restricted modules
router.get("/:id",  (req, res) => {
  const id = req.params.id
    Users.findById(id)
    .then(user => {
        if(user){
          res
          .status(200)
          .json(user)
        } else {
          res
          .status(404)//basic error  for user_id not found
          .json({ message: "The user with the specified id could not be found."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user. Error on server end.", error})
    })
})


router.post('/', validateUser, (req, res, next) => { 
  Users.add (req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Users.remove(req.params.id)
    .then(del => {
      res.json({ message: 'user has been removed',del})
    })
    .catch(next)
})

module.exports = router;