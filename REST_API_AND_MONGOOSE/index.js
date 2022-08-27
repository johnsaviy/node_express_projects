const mongoose = require('mongoose')
const colors = require('colors')
const express = require('express')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/task').then(()=> 
console.log('Database is connected'.blue)).catch((err)=> console.log(err))

const User = require('./model/User')
const Task = require('./model/Task')

/*
FOR TASK
/task POST
/task GET
/task/:id GET
/task/:id PATCH
/task:id DELETE


FOR USER
/user POST
/user GET
/user/:id GET
/user/:id PATCH
/user:id DELETE


*/

app.get('/', (req, res)=>{
    res.send('REST API IS WORKING')
})

app.post('/task', async (req, res)=>{

    try{
        const task = new Task(req.body)
        await task.save()
        return res.status(201).json({success: true, task})
    }
    catch(e){
        return res.status(400).json({success: false, message: e.message})

    }
    
 })

const port = process.env.PORT || 4040
app.listen(port, ()=> console.log(`Server is running on port ${port}`.blue))