const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('User', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    like: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_received: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_send: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false
  });
};