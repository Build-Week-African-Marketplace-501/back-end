const db = require('../../data/db-config')

const get = () => db('items')

const getBy = (filter) => db('items').where(filter).first()

const add = (item) => {
  return db('items').insert(item, ['*'])
}

module.exports = {
  get,
  getBy,
  add,
}

/**
 * 
 * 
function getAllUsers() {
  return db('users')
}

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}
 */
