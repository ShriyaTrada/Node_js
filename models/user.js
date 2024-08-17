module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        username: 
        { 
            type: DataTypes.STRING, 
            unique: true, allowNull: false 
        },

        password: 
        { 
            type: DataTypes.STRING, 
            allowNull: false 
        },

        role: {
            type: DataTypes.ENUM('admin', 'customer'), // Define roles here
            defaultValue: 'customer',
        },
    });
};