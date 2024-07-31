const express = require('express')
var bodyParser = require('body-parser')
const port = 3000
const app = express()

require('./database_connect')

app.use(bodyParser.json())

app.get('/' , (req , res) => {
    res.send("This my home page")
})

app.listen(port , () => {
    console.log(`Application is running on port ${port}`)
})
