const { Recipe } = require('../../../db')

const dbLetter = async(letter) => {
  const allRecipesDb = await Recipe.findAll({})
  if(allRecipesDb){
    const names = allRecipesDb.map(r => {
      return {
        name: r.dataValues.name_recipe,
      }
    })
     const namesContainer = []
    for (let i = 0; i < names.length; i++) {
      const letters = names[i].name.split('')
        if(letters[0] === letter) {
          if(!namesContainer.includes(names[i].name))
          namesContainer.push(names[i].name)
        }
      }
      return namesContainer 
  }
};

module.exports = dbLetter;