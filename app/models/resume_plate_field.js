const DB = require('../../lib/db')

module.exports = DB.bookshelf.Model.extend({
  tableName: 'resume_plate_field'
})
