const mongoose = require('mongoose')
const validator = require('validator')

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    team: {
        type: String,
        require: true
    },
    stack: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },

})

const userDB = mongoose.model('participants', schema)

module.exports = userDB