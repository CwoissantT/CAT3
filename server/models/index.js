const User = require('./User');
const Role = require('./Role');
const Open_Appts = require('./Open_Appts');
const User_Appts = require('./User_Appts');

User.belongsTo(Role, { foreignKey: 'role', as: 'userRole' });
Role.hasMany(User, { foreignKey: 'role', as: 'users' });

User_Appts.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(User_Appts, { foreignKey: 'user_id' });


module.exports = { User, Role, Open_Appts, User_Appts };