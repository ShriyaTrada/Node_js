const { validate } = require('joi')
const { userSchema } = require('../middleware/userValidate')
const { UserModel } = require('../model/userModel')
const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue')
const { ProfileModel } = require('../model/profileModel')
//onst { PostModel } = require('../model/postModel')


const createUsers = async(req , res) => {

    try {
       
        const user = await UserModel.create({username : req.body.username})
        // const profile = await ProfileModel.create({bio : req.body.bio , userId : user.id})

        //creating muliple  post for user 
        const post = await PostModel.create({content : req.body.content , userId : user.id})

        return res.status(201).json({user , post}) //use 201 status for resources creation
    }
    catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error : error.message}) //user 404 status for server errors
    }

}

const getUsers = async(req , res) => {
    try{
        const userWithPost = await UserModel.findAll({
            include : {
                model : PostModel , as : 'Post'
            }
        })
        return res.status(200).json(userWithPost)
    }
    catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error : error.message}) //user 500 status for server errors
    }
}

const getUsersById = async(req , res) => {
    try{
        const users = await UserModel.findByPk(req.params.id)
        return res.status(200).json(users)
    }
    catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error : error.message}) //user 500 status for server errors
    }
}

const updateUsers = async(req , res) => {
    try {
        //validate require it will handle error itself
        const {error} = userSchema.validate(req.body)
        if(error) return res.status(400).json(error.details[0].message)

        const users = await UserModel.findByPk(req.params.id)

        if(!users) return res.status(500).json({error : 'User not found'})
        
        await users.update(req.body)
        return res.status(200).json({message : 'User Updated'})

    } catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error}) //user 500 status for server errors
    }
}

const deleteUsers = async(req , res) => {
    
    try {

        const users = await UserModel.findByPk(req.params.id)

        if(!users) return res.status(500).json({error : 'User not found'})
        
        await users.destroy()
        return res.status(200).json({message : 'User Deleted'})

    } catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error}) //user 500 status for server errors
    }

}

module.exports = {
    createUsers ,
    getUsers ,
    getUsersById,
    updateUsers ,
    deleteUsers
}