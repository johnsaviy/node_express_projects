const mongoose = require('mongoose')
const colors = require('colors')

mongoose.connect('mongodb://localhost:27017/task').then(()=> 
console.log('Database is connected')).catch((err)=> console.log(err))

const User = require('./model/User')
const Task = require('./model/Task')

async function db(){

    try{
        const task = new Task({
            description: `This is task 1`,
            isCompleted: true

        })

       await task.save()
       console.log(task)
        // const user = new User({
        //     name: 'John',
        //     age: 30,
        //     email: 'john@gmail.com',
        //     password: 'johnpass'
        // }) 
        // await user.save()
        // console.log(user)
    }
    catch(e){
        console.log(colors.red.underline.bold(e.message))
    }

    
}

db()