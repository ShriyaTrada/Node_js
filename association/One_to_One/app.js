const express = require('express')
const { dbConnection } = require('./config/dbConnect')
const { router } = require('./routes/route')
const { UserModel } = require('./model/userModel')
const { sequelize } = require('./config/dbConnect')
require('./asso.js')
const port = 3000

const app = express()

app.use(express.json())

app.use('/' , router)

sequelize.sync({force : false})

UserModel.sync({force : false})

app.listen(port , async() => {
    console.log(`Server is running on port ${port}`)
    await dbConnection()
})