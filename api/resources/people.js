const db = require('../../osdi-sequelize')

module.exports = {
  singular: 'person',
  Model: db.Person,
  linkedResources: ['attendances'],

  querify: req => ({}),

  restrict: req => new Promise((resolve, reject) => {
    resolve('')
  }),

  validate: req => ({})
}
