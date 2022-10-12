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
        if(namesArray.length === 1) {
           if(namesArray[0] === name)
           //console.log(namesArray[0] + '-' + name)
            namesContainer.push(namesArray[0])
         } else if(namesArray.length > 1){
          console.log((namesArray.join(' ')) + '-' + name)
            for (let i = 0; i < namesArray.length; i++) {
              if(namesArray[i] === name){
                namesContainer.push(namesArray.join(' '))
              }
              if (namesArray.join(' ') === name){
                namesContainer.push(namesArray.join(' '))
                break;
              }
            }
         }
       }
       console.log(namesContainer)
       return namesContainer 
  }
};

module.exports = dbName;