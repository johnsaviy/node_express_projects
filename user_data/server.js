var express = require('express');
var app = express()
var morgan = require('morgan')
var path = require('path')
const dotenv = require("dotenv")
var bodyParser = require('body-parser')
const connectDB = require('./server/db/connection')
const userRoutes = require('./server/routes/routes')

dotenv.config({path: "config.env"})
connectDB()

app.use(express.json())
app.use(userRoutes)
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.set('view engine', 'ejs')



// app.use('/css', express.static(path.resolve(__dirname, 'assets/style/form.css')))
// app.use('/tablecss', express.static(path.resolve(__dirname, 'assets/style/table.css')))


let PORT = process.env.PORT|| 5000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT} `);
})