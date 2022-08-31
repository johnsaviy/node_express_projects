const express = require('express')
const routes = express.Router()
var axios = require('axios')
const {create, update, find, deleteUsers} = require('../controller/controller')




routes.get('/', (req, res)=>{
    axios.get("http://localhost:4000/user/find")
    .then(function(response){
        console.log(response)
        res.send('table', {users: response.data})
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.get('/form', (req, res)=>{
    res.render('form')
})



routes.post('/user', create)

routes.get('/user/update/:id', update)

routes.get('/user/find', find)

routes.delete('/user/delete', deleteUsers) 





module.exports = routes