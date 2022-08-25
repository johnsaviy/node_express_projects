const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

})

const userDB = mongoose.model('participants', schema)

module.exports = userDB