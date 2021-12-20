const mockItems = [
  {
    item_id: 1,
    item_name: 'test item 1',
    description: 'lorem ipsum 1',
    location: 'New York, NY',
    creator: {
      user_id: 1,
      username: 'test_user_1',
    },
  },

  {
    item_id: 2,
    item_name: 'test item 2',
    description: 'lorem ipsum 2',
    location: 'New York, NY',
    creator: {
      user_id: 1,
      username: 'test_user_1',
    },
  },

  {
    item_id: 3,
    item_name: 'test item 3',
    description: 'lorem ipsum 3',
    location: 'New York, NY',
    creator: {
      user_id: 2,
      username: 'test_user_2',
    },
  },
]

const get = () => {
  return mockItems
}

const getBy = (key, value) => {
  return mockItems.find((item) => item[key] === parseInt(value))
}

const add = (item) => {
  const item_id = mockItems.length
  mockItems.push({
    ...item,
    item_id,
    creator: {
      user_id: 2,
      username: 'test_user_2',
    },
  })
  return getBy('item_id', item_id)
}

const update = (item_id, updatedItem) => {
  mockItems.forEach((item, index) => {
    if (item.item_id === item_id) mockItems[index] = updatedItem
  })
  return getBy('item_id', item_id)
}

module.exports = {
  get,
  getBy,
  add,
  update,
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
