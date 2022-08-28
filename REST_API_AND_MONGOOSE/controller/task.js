const Task = require('../model/Task')


// /task POST
exports.storeTask = async (req, res)=>{

    try{
        const task = new Task(req.body)
        await task.save()
        return res.status(201).json({success: true, task})
    }
    catch(e){
        return res.status(400).json({success: false, message: e.message})

    }
    
 }

 // /task GET
 exports.fetchAllTask = async (req, res) =>{
    const tasks = await Task.find()
    return res.json({success: true, tasks})
}

// /task/:id GET (for a specific task)
exports.getSingleTask = async (req, res) =>{
    const userTask = await Task.findById(req.params.id)
    if(!userTask){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    return res.json({success: true, userTask})
    
}

// /task/:id PATCH 
exports.updateTask = async (req, res) =>{
    
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        return res.json({success: true, task})

    }
    catch(e){
        return res.status(400).json({
            success: false,
            message: e.message,
        })
    }   
}

// /task:id DELETE

exports.deleteSpecificData = async (req, res) =>{
    
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    return res.json({success: true, task})

    }
    catch(e){
        res.status(400).json({
            success: false,
            message: e.message,
        })
    }
    
}