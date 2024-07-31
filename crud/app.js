const express = require('express')
const { dbConnection } = require('../crud/config/dbConnect')
const { router } = require('../crud/routes/route')
const { UserModel } = require('../crud/model/userModel')
const port = 3000

const app = express()

app.use(express.json())

app.use('/' , router)

UserModel.sync({force : false})

app.listen(port , async() => {
    console.log(`Server is running on port ${port}`)
    await dbConnection()
})