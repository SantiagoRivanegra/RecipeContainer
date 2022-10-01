const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING,
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