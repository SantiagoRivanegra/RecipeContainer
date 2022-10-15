const axios = require('axios')

const tags = async(req, res) => {
  const differentTabelsNotYetSeparated = []
  for (let i = 65; i < 91; i++) {   
    let letra = String.fromCodePoint(i).toLowerCase()
    const byLetter = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
    if(byLetter.data.meals && byLetter.data.meals !== null){
      const recipeLetter = await byLetter.data.meals.map(r => {
        return {
          tags: r.strTags,
        }
      })
      const set = new Set()
      for (let i = 0; i < recipeLetter.length; i++)
      if(recipeLetter[i].tags !== null && recipeLetter[i].tags !== ''){
        if(set.has(recipeLetter[i].tags) === false){
          set.add(recipeLetter[i].tags)
       }
      }
      for (let item of set){
      differentTabelsNotYetSeparated.push(item)
      }
    }
  }
  const set123 = new Set()
  for (let i = 0; i < differentTabelsNotYetSeparated.length; i++) {
    arr = differentTabelsNotYetSeparated[i].split(',')
    for (let i = 0; i < arr.length; i++) {
      if(set123.has(arr[i]) === false){
        set123.add(arr[i])
    }      
    }    
  }
  const containerDifferentTags = []
  for (let item of set123){
    containerDifferentTags.push(item)
  }
  res.status(200).json(containerDifferentTags)
}

module.exports = {
  tags
}