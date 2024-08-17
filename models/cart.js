module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Cart', {
        quantity: 
        { 
            type: DataTypes.INTEGER, 
            defaultValue: 1 
        }
    });
};
