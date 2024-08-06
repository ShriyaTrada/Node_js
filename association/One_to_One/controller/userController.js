const { validate } = require('joi')
const { profileSchema } = require('../middleware/profileValidate')
const { userSchema } = require('../middleware/userValidate')
const { UserModel } = require('../model/userModel')
const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue')
const { ProfileModel } = require('../model/profileModel')
//const { PostModel } = require('../model/postModel')


const createUsers = async(req , res) => {

    try {
       
        const user = await UserModel.create({username : req.body.username})
        const profile = await ProfileModel.create({bio : req.body.bio , userId : user.id})

        //creating muliple  post for user 
        //const post = await PostModel.create({content : req.body.content , userId : user.id})

        return res.status(201).json({user , profile}) //use 201 status for resources creation
    }
    catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error : error.message}) //user 404 status for server errors
    }

}

const getUsers = async(req , res) => {
    try{
        const userWithProfile = await UserModel.findAll({
            include : {
                model : ProfileModel , as : 'Profile'
            }
        })
        return res.status(200).json(userWithProfile)
    }
    catch (error) {
        console.error(error) //log the error for debugging purpose
        res.status(500).json({error : error.message}) //user 500 status for server errors
    }
}

const getUsersById = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id, {
            include: {
                model: ProfileModel,
                as: 'Profile'
            }
        });

        if (!user) return res.status(404).json({ error: 'User not found' }); // 404 status for not found

        return res.status(200).json(user); // 200 status for successful retrieval
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message }); // 500 status for server errors
    }
};

const updateUsers = async (req, res) => {
    try {
        // Validate user input
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const user = await UserModel.findByPk(req.params.id);

        if (!user) return res.status(404).json({ error: 'User not found' }); // 404 status for not found

        // Update user
        await user.update(req.body);
        return res.status(200).json({ message: 'User Updated' }); // 200 status for successful update
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message }); // 500 status for server errors
    }
};

const deleteUsers = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);

        if (!user) return res.status(404).json({ error: 'User not found' }); // 404 status for not found

        // Delete user
        await user.destroy();
        return res.status(200).json({ message: 'User Deleted' }); // 200 status for successful deletion
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message }); // 500 status for server errors
    }
};

module.exports = {
    createUsers ,
    getUsers ,
    getUsersById,
    updateUsers ,
    deleteUsers
}