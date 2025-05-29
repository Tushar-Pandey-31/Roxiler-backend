const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');
const User = require('./User');

const Store = sequelize.define('Store', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

// Associations
Store.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });

module.exports = Store;
