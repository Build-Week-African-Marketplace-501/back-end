/* eslint-disable */

const router = require('express').Router()

// const Users = require('./user-model.js')
const { validator } = require('../global-middleware')
const { userSchema } = require('./user-schema')
const { userIdExists } = require('./user-middleware')

// [GET] /api/users
router.get('/', (req, res, next) => {
  users.find(req.query)
  .then(look => {
    res.status(200).json(look);
  })
  .catch(error => {
    next(error);
  });
  
});

// [GET] /api/users/:user_id
router.get('/:user_id', userIdExists, (req, res, next) => {
  const { id } = req.params;
  db('users').where({user_id }).first()
  .then(userids=> {
    res.json(userids);
  })
  .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve item' });
  });
});


// [GET] /api/users/:user_id/items
router.get('/:user_id/items', userIdExists, (req, res, next) => {
  const userIdItems = { ...req.body,user_id: req.params.id };

 items.add(userIdItems)
    .then(item => {
      res.status(210).json(item);
    })
    .catch(next);
});

// POST route might not be necessary, should use /auth/register instead
// // [POST] /api/users
// router.post('/', validator(userSchema), (req, res, next) => {
//   res.status(201).json({ message: 'WIP - [POST] /api/users', data: {} }).catch(next)
// })

// [PUT] /api/users/:user_id

router.put('/:user_id', [validator(userSchema), userIdExists], (req, res, next) => {

  users.update(req.params.id, req.body)
  .then(look => {
    res.json(look);
  })
  .catch(error => {
    next(error);
  });

})
  

module.exports = router;
