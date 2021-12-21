const yup = require('yup')

const itemsSchema = yup.object({
  body: yup.object({
    item_name: yup.string().required('item_name is required').max(128),
    item_description: yup.string().required('description is required').max(256),
    item_location: yup.string().required('location is required').max(128),
    item_price: yup.string().required('price is required').max(16),
  }),
})

module.exports = {
  itemsSchema,
}
