const { Recipe } = require('../../../db')

const dbName = async(name) => {
  const allRecipesDb = await Recipe.findAll({})
  if(allRecipesDb){
    const namesOfRecipes = allRecipesDb.map(r => {
      return {
        name: r.dataValues.name_recipe,
      }
    })
      const containerAllRecipesWithSameName = []
      const containerAllRecipesWithDifferentName = []
    for (const element of namesOfRecipes) {
      const namesArray = element.name.split(' ')
       if(namesArray.length === 1) {
          if(namesArray[0] === name)
           containerAllRecipesWithSameName.push(namesArray[0])
        } else if(namesArray.length > 1){
           for (const element of namesArray) {
             if(element === name){
               containerAllRecipesWithSameName.push(namesArray.join(' '))
             }
             if (namesArray.join(' ') === name){
               containerAllRecipesWithSameName.push(namesArray.join(' '))
               break;
             }
           }
        }
      }
      const set = new Set()
      for(const element of containerAllRecipesWithSameName){
        if(set.has(element) === false){
            set.add(element)
        }
      }
      for (let item of set){
        containerAllRecipesWithDifferentName.push(item)
      }
      return containerAllRecipesWithDifferentName 
  }  
};

module.exports = dbName;