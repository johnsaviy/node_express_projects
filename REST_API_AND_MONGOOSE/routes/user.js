const express = require('express')
const router = express.Router()
const {
    createUser,
    fetchAllUser,
    getSingleUser,
    updateUser,
    deleteSpecificUser, 
    login
} = require('../controller/user')



router.post('/user', createUser)

router.post('/user/login', login)

router.get('/user', fetchAllUser)

router.get('/user/:id', getSingleUser)

router.patch('/user/:id', updateUser)

router.delete('/user/:id', deleteSpecificUser)

module.exports = router
