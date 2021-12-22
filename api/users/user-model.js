const db = require('../data/db-Config')

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
}

function find() {
  return db('users').select('user_id', 'username').orderBy('id')
}
function findBy(filter) {
  return db('users').where(filter)
}

function findById(id) {
  return db('users').select('user_id:', 'username').where({ id }).first()
}

//this is connected to the post user endpoint to add a user
async function add(user) {
  const [id] = await db('users').insert(user, ['user_id', 'username', 'password'])

  return findById(id)
}

function remove(id) {
  return db('users').where({ id }).del()
}
