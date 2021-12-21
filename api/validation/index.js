// validates req.body using yup schema passed as schema
const validator = (schema) => async (req, res, next) => {
  try {
    await schema.validate({ body: req.body })
    next()
  } catch (err) {
    next({ status: 401, message: err })
  }
}

module.exports = {
  validator,
}
