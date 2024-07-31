const express = require('express');
const {query , validationResult} = require('express-validator')
const app = express();

app.use(express.json());
app.get('/about', query('person').notEmpty(), (req, res) => {
    const result = validationResult(req)

    if(result.isEmpty())
    {
       return res.send(`Hello, ${req.query.person}!`)
    }
    res.send({error : result.array() })
  
});

app.listen(3000 , (req , res) => {
    console.log("Running on 3000 server")
});