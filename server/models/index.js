const User = require('./User');
const Role = require('./Role');
const Open_Appts = require('./Open_Appts');
const User_Appts = require('./User_Appts');

User.belongsTo(Role, { foreignKey: 'role', as: 'userRole' });
Role.hasMany(User, { foreignKey: 'role', as: 'users' });


module.exports = { User, Role, Open_Appts, User_Appts };