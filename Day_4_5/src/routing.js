//First Program in express 

const express = require('express') //importing the express module
const first_app = express() //calling the express function
const port = process.env.PORT || 3005;

const path = require('path');

const staticPath = path.join(__dirname , "../web_template")

first_app.use(express.static(staticPath))

// '/' means we are asking server to get something
first_app.get("/" , (req , res , next) => {  
    res.send("Hello User !")
    res.next()
}) 

first_app.get("/about" , (req , res , next) => {
    res.send("Welcome user , to the About page")
    res.next()
})

first_app.get("/contact" , (req , res , next) => {
    res.send("Welcome to the Contact page")
    res.next()
})

first_app.get("/blog" , (req , res , next) => {
    return next(new Error("Something went wrong..!"))
})

first_app.use((err , req , res , next ) => {
    console.error(err.stack)
    res.status(500).send("Something Broke")
})


first_app.listen(port , () => {
    console.log(`Listing the port at ${port}`)
})


