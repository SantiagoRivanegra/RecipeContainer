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
      allowNull: false,
    },
    like: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_received: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_send: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });
};