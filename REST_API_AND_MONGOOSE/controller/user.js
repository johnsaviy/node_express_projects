const User = require('../model/User')
const bcrypt = require('bcryptjs')

// /user POST
exports.createUser =  async (req, res)=>{

    try{
        // req.body.password  = await bcrypt.hash(req.body.password, 8) --> transferred to user-model file
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
        const user = await User.findById(req.params.id)

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const keys = Object.keys(req.body)

        for (let key of keys){
            user[key] = req.body[key]
        }

        await user.save()

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        return res.json({success: true, user})

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

exports.login = async (req, res) =>{
    //match email and password
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({
            success: false,
            message: 'User not found'
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(401).json({
            success: false,
            message: 'Invalid password'
        })
    }
    return res.status(200).json({
        success: true,
        user,
    })
}