var express = require('express');
var app = express()
var userDB = require('../model/model')

app.use(express.json())

 exports.create = (req, res) =>{
    if(!req.body){
        res.status(400).send({message: 'Field cannot be empty'})
        return;
    }
    const user = new userDB({
        name: req.body.name,
        team: req.body.team,
        stack: req.body.stack,
        gender: req.body.gender,
    })
    
     user.save(user)
    //  return res.status(201).json({success: true, user})
     .then(data=>{
        res.send(data)
     })
     .catch(err=>{
        res.status(500).send(err)
     })
    
    // return res.redirect('/form')
    
    // console.log(req.body)
}

exports.find = (req, res) =>{
    userDB.find().then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message:'error retrieving details'})
    })
}

exports.update = (req, res) =>{
    if(!req.body){
        return res.status(400).send({message: 'no data'})  
    }
    const id = req.params.id
    userDB.findByIdAndUpdate(id, req.body, {userFindAndModify:false})
    .then(data =>{
        if (!data){
            res.status(404).send({message:"no user id"})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: 'nothing to do'})
    })
}

exports.deleteUsers = async (req, res) =>{
    
    try{
        const task = await userDB.findByIdAndDelete(req.params.id)
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