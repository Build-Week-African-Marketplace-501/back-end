const yup = require('yup')

const itemsSchema = yup.object({
  body: yup.object({
    item_name: yup.string().required('item_name is required').max(128),
    description: yup.string().required('description is required').max(256),
    location: yup.string().required('location is required').max(128),
    price: yup.number().required('price is required').positive(),
  }),
})

module.exports = {
  itemsSchema,
}
