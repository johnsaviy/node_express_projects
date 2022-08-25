const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    res.render('table')
})

routes.get('/form', (req, res)=>{
    res.render('form')
})


module.exports = routes