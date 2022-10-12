const { Recipe } = require('../../../db')

const dbName = async(name) => {
  const allRecipesDb = await Recipe.findAll({})
  if(allRecipesDb){
    const names = allRecipesDb.map(r => {
      return {
        name: r.dataValues.name_recipe,
      }
    })
      const namesContainer = []
     for (let i = 0; i < names.length; i++) {
       const namesArray = names[i].name.split(' ')
       //console.log(namesArray)
        if(namesArray.length === 1) {
           if(namesArray[0] === name)
            namesContainer.push(namesArray[0])
         } else if(namesArray.length > 1){
            for (let i = 0; i < namesArray.length; i++) {
              if(namesArray[i] === name){
                namesContainer.push(namesArray.join(' '))
              }
            }
         }
       }
       return namesContainer 
  }
};

module.exports = dbName;