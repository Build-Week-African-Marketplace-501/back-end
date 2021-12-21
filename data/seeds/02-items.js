// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('items').insert([
    {
      item_name: 'Test Name',
      item_description: 'Test Desc',
      item_location: 'Test Location',
      item_price: 19.95,
      user_id: 1,
    },
  ])
}
