const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    admin: {
      type: DataTypes.STRING,
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