const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('association' , 'root' , '08shriya03' , {
    host : 'localhost' ,
    dialect : 'mysql',
})

const dbConnection = async() => {
    try{
        await sequelize.authenticate()
        console.log("Database is connected successfully...!")
    }
    catch{
        console.error("Database connection failed...!")
    }
}

module.exports = {
    dbConnection ,
    sequelize
}

