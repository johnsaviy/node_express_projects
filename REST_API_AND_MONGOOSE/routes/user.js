const express = require('express')
const router = express.Router()
const {
    storeUser,
    fetchAllUser,
    getSingleUser,
    updateUser,
    deleteSpecificUser
} = require('../controller/user')



router.post('/user', storeUser)

router.get('/user', fetchAllUser)

router.get('/user/:id', getSingleUser)

router.patch('/user/:id', updateUser)

router.delete('/user/:id', deleteSpecificUser)

module.exports = router
