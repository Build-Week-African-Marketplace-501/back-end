/* eslint-disable */

const router = require('express').Router()

 const items = require('./items-model')
const { validator } = require('../global-middleware')
const { itemsSchema } = require('./items-schema')
const { validateItemId } = require('./items-middleware');
const { response } = require('../server');

// [GET] /api/items
router.get('/', (req, res, next) => {
  items.find()
  .then(item => {
  res.json(item);
    //message: 'WIP - [GET] /api/items', data: [] })
})
 .catch(err => {
  res.status(500).json({ message:'Failed to retrieve item' });
});

})


// [GET] /api/items/:item_id
router.get('/:item_id', validateItemId, (req, res, next) => {
  const { id } = req.params;
  db('items').where({ id }).first()
  .then(item => {
    res.json(item);
  })
  .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve item' });
  });
});





// [POST] /api/items
router.post('/', validator(itemsSchema), (req, res, next) => {
  const newItem = req.body;
  db('items').insert(newItem)
    .then(ids => {
      db('items').where({user_id: ids[0] })
        .then(newItemEntry => {
          res.status(201).json(newItemEntry);
        });
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to store data" });
    });
});




  

// [PUT] /api/items/:item_id
router.put('/:item_id', [validator(itemsSchema), validateItemId], (req, res, next) => {
items.update(req.params.id, req.body)
.then(response => {
  res.json(response);
})
.catch(error => {
  next(error);
});
});



// [DELETE] /api/items/:item_id
router.delete('/:item_id', validateItemId, (req, res, next) => { 
  items.remove(req.params.id)
  .then(count => {
    res.status(200).json({ message: 'item destroyed!!' });
  })
  .catch(error => {
    next(error);
  });
});

 

module.exports = router
