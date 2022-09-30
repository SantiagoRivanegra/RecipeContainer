const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name_recipe: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient16: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient17: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient18: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient19: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient20: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure16: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure17: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure18: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure19: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measure20: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    createdInD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: false
  });
};