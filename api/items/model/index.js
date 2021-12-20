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
  return mockItems.filter((item) => item[key] === value)
}

const add = (item) => {}

module.exports = {
  get,
  getBy,
  add,
}
