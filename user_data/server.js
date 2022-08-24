var express = require('express');
var app = express()
var morgan = require('morgan')
var path = require('path')
const dotenv = require("dotenv")
var bodyparser = require('body-parser')

dotenv.config({path: "config.env"})



let PORT = process.env.PORT|| 5000

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.use(express.static('assets'))

// app.use('/css', express.static(path.resolve(__dirname, 'assets/style/form.css')))
// app.use('/tablecss', express.static(path.resolve(__dirname, 'assets/style/table.css')))

app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))


app.get('/', (req, res)=>{
    res.render('form')
});

app.get('/table', (req, res)=>{
    res.render('table')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT} `);
})