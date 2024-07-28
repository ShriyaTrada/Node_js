
//First Program in express 

const express = require('express') //importing the express module
const first_app = express() //calling the express function
const port = process.env.PORT || 3004;

// '/' means we are asking server to get something
first_app.get("/" , (req , res) => {  
    res.send("Hello World !")
}) 

first_app.get("/about" , (req , res) => {
    res.send("Welcome to the About page")
})

first_app.get("/contact" , (req , res) => {
    res.send("Welcome to the Contact page")
})

first_app.get("/blog" , (req , res) => {
    res.send("Welcome to the Contact page")
})


first_app.listen(port , () => {
    console.log(`Listing the port at ${port}`)
})
