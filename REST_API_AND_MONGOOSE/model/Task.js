const taskSchema = new mongoose.Schema({
    description: String,
    isCompleted: Boolean,
})
const Task = mongoose.model('Task', taskShema)


module.exports = Task