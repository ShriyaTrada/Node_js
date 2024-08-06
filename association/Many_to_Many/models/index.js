// models/index.js
const sequelize = require('../config/db');
const User = require('./User');
const Group = require('./Group');
const UserGroup = require('./UserGroup');

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

module.exports = {
  User,
  Group,
  UserGroup,
};
