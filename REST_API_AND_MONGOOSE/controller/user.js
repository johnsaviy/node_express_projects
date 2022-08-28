const User = require('../model/User')


// /user POST
exports.storeUser =  async (req, res)=>{

    try{
        const user = new User(req.body)
        await user.save()
        return res.status(201).json({success: true, user})
    }
    catch(e){
        return res.status(400).json({success: false, message: e.message})

    }
    
 }


 // /user GET
exports.fetchAllUser =async (req, res) =>{
    const users = await User.find()
    return res.json({success: true, users})
}


// /user/:id GET (for a specific user data)
exports.getSingleUser = async (req, res) =>{
    const userData = await User.findById(req.params.id)
    if(!userData){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }

    return res.json({success: true, userData})
}

// /user/:id PATCH  
exports.updateUser = async (req, res) =>{
    
    try{
        const userData = await User.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true,
        })
        if(!userData){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        return res.json({success: true, userData})

    }
    catch(e){
        return res.status(400).json({
            success: false,
            message: e.message,
        })
    }  
}


// /user:id DELETE
exports.deleteSpecificUser = async (req, res) =>{
    
    try{
        const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    return res.json({success: true, user})

    }
    catch(e){
        res.status(400).json({
            success: false,
            message: e.message,
        })
    }
    
}