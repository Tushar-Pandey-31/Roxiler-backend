const {DataTypes} = require('sequelize');
const sequelize = require('sequelize');

const User = sequelize.define('User',{
    name:{
        type:DataTypes.STRING(60),
        allowNull:false,
        validate:{
            len:[20,60]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING(400),
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM('admin', 'user', 'store_owner'),
        allowNull:false
    }


},{
    timestamps:true
});

module.exports = User;