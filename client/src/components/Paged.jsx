import React from 'react'

const Paged = ({ recipesPerPage, allRecipes, paged }) => {
  const pageNumbers = []

  for(let i = 0; i <= Math.ceil(allRecipes/recipesPerPage)-1; i++){
    pageNumbers.push(i+1)
  }
  return (
      <nav>
        <ul className='paginado'>
          {
            pageNumbers && pageNumbers.map(number => (
              <button href="/#" onClick={() => paged(number)} key={number}>{number}</button>
              )
              )}
        </ul>
      </nav>
  )
}

export default Paged