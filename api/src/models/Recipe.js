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
      allowNull: false,
    },
    ingredient5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient10: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient17: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient18: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient19: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient20: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    measure5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure10: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure17: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure18: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure19: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure20: {
      type: DataTypes.STRING,
      allowNull: false,
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