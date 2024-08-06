const { UserModel } = require("./association/One_to_Many/model/userModel")
const { ProfileModel } = require("./association/One_to_Many/model/profileModel")
const { PostModel } = require("./association/One_to_Many/model/postModel")

//  //1. One to One mapping

// UserModel.hasOne(ProfileModel , {
//     foreignKey : 'userId' ,
//     as : 'Profile'
// })
// ProfileModel.belongsTo(UserModel , {
//     foreignKey : 'userId' ,
//     as : 'User'
// })

//2. One to Many mapping : A user can have many post

UserModel.hasMany(PostModel , {
    foreignKey : 'userId' ,
    as : 'Post'
})
PostModel.belongsTo(UserModel , {
    foreignKey : 'userId' ,
    as : 'User'
})