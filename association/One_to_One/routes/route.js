const express = require('express')
const { createUser, getUsers, getUsersById, updateUsers, deleteUsers, createUsers } = require("../controller/userController")

//router is a method in express         
const router = express.Router()


// 1. Create a new user
router.post('/addUser' , createUsers)

// 2. Get all user 
router.get('/getAllUser' , getUsers)

// 3. Get user by Id
router.get('/getUser/:id' , getUsersById)

// 4. Update user by Id
router.put('/updateUser/:id' , updateUsers)

// 5. Delete user by Id
router.delete('/deleteUser/:id' , deleteUsers)

module.exports = {router}