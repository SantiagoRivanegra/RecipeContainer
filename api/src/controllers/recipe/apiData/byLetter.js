const axios = require('axios')

const byLetter = async(letter) => {
  const byLetter = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      if(byLetter.data.meals){
      const recipeLetter = await byLetter.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          category: r.strCategory,
          area: r.strArea,
          instructions: r.strInstructions,
          image: r.strMealThumb,
          tags: r.strTags,
          videos: r.strYoutube,
          ingredient1: r.strIngredient1 ? r.strIngredient1 : "",
          ingredient2: r.strIngredient2 ? r.strIngredient2 : "",
          ingredient3: r.strIngredient3 ? r.strIngredient3 : "",
          ingredient4: r.strIngredient4 ? r.strIngredient4 : "",
          ingredient5: r.strIngredient5 ? r.strIngredient5 : "",
          ingredient6: r.strIngredient6 ? r.strIngredient6 : "",
          ingredient7: r.strIngredient7 ? r.strIngredient7 : "",
          ingredient8: r.strIngredient8 ? r.strIngredient8 : "",
          ingredient9: r.strIngredient9 ? r.strIngredient9 : "",
          ingredient10: r.strIngredient10 ? r.strIngredient10 : "",
          ingredient11: r.strIngredient11 ? r.strIngredient11 : "",
          ingredient12: r.strIngredient12 ? r.strIngredient12 : "",
          ingredient13: r.strIngredient13 ? r.strIngredient13 : "",
          ingredient14: r.strIngredient14 ? r.strIngredient14 : "",
          ingredient15: r.strIngredient15 ? r.strIngredient15 : "",
          ingredient16: r.strIngredient16 ? r.strIngredient16 : "",
          ingredient17: r.strIngredient17 ? r.strIngredient17 : "",
          ingredient18: r.strIngredient18 ? r.strIngredient18 : "",
          ingredient19: r.strIngredient19 ? r.strIngredient19 : "",
          ingredient20: r.strIngredient20 ? r.strIngredient20 : "",
          measure1: r.strMeasure1 ? r.strMeasure1 : "",
          measure2: r.strMeasure2 ? r.strMeasure2 : "",
          measure3: r.strMeasure3 ? r.strMeasure3 : "",
          measure4: r.strMeasure4 ? r.strMeasure4 : "",
          measure5: r.strMeasure5 ? r.strMeasure5 : "",
          measure6: r.strMeasure6 ? r.strMeasure6 : "",
          measure7: r.strMeasure7 ? r.strMeasure7 : "",
          measure8: r.strMeasure8 ? r.strMeasure8 : "",
          measure9: r.strMeasure9 ? r.strMeasure9 : "",
          measure10: r.strMeasure10 ? r.strMeasure10 : "",
          measure11: r.strMeasure11 ? r.strMeasure11 : "",
          measure12: r.strMeasure12 ? r.strMeasure12 : "",
          measure13: r.strMeasure13 ? r.strMeasure13 : "",
          measure14: r.strMeasure14 ? r.strMeasure14 : "",
          measure15: r.strMeasure15 ? r.strMeasure15 : "",
          measure16: r.strMeasure16 ? r.strMeasure16 : "",
          measure17: r.strMeasure17 ? r.strMeasure17 : "",
          measure18: r.strMeasure18 ? r.strMeasure18 : "",
          measure19: r.strMeasure19 ? r.strMeasure19 : "",
          measure20: r.strMeasure20 ? r.strMeasure20 : "",
        }
      })
      return recipeLetter
    }
  }

  module.exports = byLetter;