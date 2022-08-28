const mongoose = require('mongoose')
const colors = require('colors')
const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')

app.use(userRoutes)
app.use(taskRoutes)
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/task').then(()=> 
console.log('Database is connected'.blue)).catch((err)=> console.log(err))


app.get('/', (req, res)=>{
    res.send('Welcome to My REST API')
})



const port = process.env.PORT || 4040
app.listen(port, ()=> console.log(`Server is running on port ${port}`.blue))