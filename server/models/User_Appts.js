const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class User_Appts extends Model {}

User_Appts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_appts',
    indexes: [
        {
            unique: true,
            fields: ['date'],
        },
    ],
})

module.exports = User_Appts;