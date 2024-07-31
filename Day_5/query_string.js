const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    console.log("This is home page");
    next();
} , (req, res, next) => {
    res.send("This is home page");
    ;
});

app.get("/about", (req, res, next) => {
    let person = req.query.name;
    res.json({ name: person });
    next()
});

app.listen(3000, () => {
    console.log("Your server is running on port 3000");
});



