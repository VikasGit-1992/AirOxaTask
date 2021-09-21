const mongoose = require('mongoose')


const testSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    }
  

})

module.exports = mongoose.model('test1',testSchema)