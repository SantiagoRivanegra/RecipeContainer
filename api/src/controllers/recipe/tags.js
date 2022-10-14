const axios = require('axios')

const tags = async(req, res) => {
  const tags = []
  for (let i = 65; i < 91; i++) {   
    let letra = String.fromCodePoint(i).toLowerCase()
    const byLetter = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
    if(byLetter.data.meals && byLetter.data.meals !== null){
      const recipeLetter = await byLetter.data.meals.map(r => {
        return {
          tags: r.strTags,
        }
      })
      for (let i = 0; i < recipeLetter.length; i++)
      if(recipeLetter[i] !== null)
      tags.push(recipeLetter[i])
    }
  }
  console.log(tags)
}

module.exports = {
  tags
}