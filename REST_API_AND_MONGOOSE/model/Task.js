const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: String,
    isCompleted: Boolean,
})
const Task = mongoose.model('Task', taskShema)


module.exports = Task