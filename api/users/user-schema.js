const yup = require('yup')

const addUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required('username is required').max(128),
    password: yup.string().required('password is required').max(512),
  }),
})

module.exports = {
  addUserSchema,
}
