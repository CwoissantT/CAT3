const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Open_Appts extends Model {}

Open_Appts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    modelName: 'open_appts',
    indexes: [
        {
            unique: true,
            fields: ['date'],
        },
    ],
})

module.exports = Open_Appts;