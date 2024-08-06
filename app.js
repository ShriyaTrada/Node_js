const express = require('express')
const { dbConnection } = require('./association/One_to_Many/config/dbConnect')
const { router } = require('./association/One_to_Many/routes/route')
const { UserModel } = require('./association/One_to_Many/model/userModel')
const { sequelize } = require('./association/One_to_Many/config/dbConnect')
require('./asso.js')
const port = 3000

const app = express()

app.use(express.json())

app.use('/' , router)

sequelize.sync({force : false})

// UserModel.sync({force : false})
app.listen(port , async() => {
    console.log(`Server is running on port ${port}`)
    await dbConnection()
})