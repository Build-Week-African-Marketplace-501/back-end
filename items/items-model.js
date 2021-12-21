const router = require("express").Router();

const Items = require("./products-model.js");
const restricted = require('../auth/restricted_middleware.js');
const validateData = require('./items-validation.js')

router.get("/items", restricted, (req, res) => {
  Items.find()
    .then(item => {
      res.json(item);
    })
    .catch(err => res.send(err));
});

router.get("/items/:id", restricted, (req, res) => {
  const id = req.params.id

    Items.findById(id)
    .then(item=> {
        console.log("item", item)
        if(item){
            res
            .status(200)
            .json(item)
        } else {
            res
            .status(404)
            .json({ message: "The item not be found. Error on client end."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the item. Error on server end.", error})
    })
})
  
router.get("/items/:id/user", (req, res) => {
    const id = req.params.id

    .findUserProductsById(id)
    .then(item => {
        if(item.length){
            res
            .status(200)
            .json(item)
        } else {
            res
            .status(404)
            .json({ message: "A product list for the user with the id could not be found. Error on client end."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user's items list. Error on server end.", error})
    })
})
  
router.post("/:id/items", restricted, validateData, (req, res) => {
  
  const user_id = req.params.id
  const { category, market_area, name, description, price, image_url } = req.body
  
  Items.add({...req.body, user_id})
  .then(item => {
    res
    .status(201)
    .json({...Items, category, market_area, name, description, price, user_id, image_url })
    })
    .catch(error => {
    res
    .status(500)
    .json({ message: "The server was not able to create the product listing", error})
    })
})

router.delete("/items/:id", (req, res) => {
    const id = req.params.id
  
   Items.findById(id)
      .then(item => {
      Items.remove(id)
        .then(removeItem => {
          if(removeItem) {
              res.status(200)
              .json({message: `The Product with ID number ${id} has been successfully removed.`,removeItem })
          } else {
              res.status(404).json({ errorMessage: "The Product with the specified ID does not exist." })
          }
        })
      })
      .catch (error => {
          console.log("error on DELETE /items/:id", error);
          res
          .status(500)
          .json({ errorMessage: "The Product could not be removed." })
      });
    })

module.exports = router;