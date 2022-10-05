import React, { useEffect } from 'react'

import { postRecipe } from '../../../redux/actions'

const Post = () => {

  const handleChange = (e) => {
    console.log(e.target.files[0])
  }

  return (
    <div>Post
      <div>
        <h2>Poner los selects para los filtros en la home asi veo como va quedando</h2>
        <h2>Separar las cosas con el Section(random y filtros izquierda || lo demas al centro/derecha)</h2>
        <form>
          <input onChange={handleChange} type="file" /> 

        </form>
      </div>
    </div>
  )
}

export default Post