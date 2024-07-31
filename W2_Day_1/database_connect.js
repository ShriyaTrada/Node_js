const express = require('express')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('student' , 'root' , '08shriya03' , {
    host : 'localhost' ,
    dialect : 'mysql'
})

try{
    sequelize.authenticate()
    console.log("Connected Successfully...!")
}
catch(error){
    console.error("Connection failed...!" , error)
}

