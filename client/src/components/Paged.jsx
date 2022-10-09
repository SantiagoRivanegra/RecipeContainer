import React from 'react'

const Paged = ({ recipesPerPage, allRecipes, paged }) => {
  const pageNumbers = []

  for(let i = 0; i <= Math.ceil(allRecipes/recipesPerPage)-1; i++){
    pageNumbers.push(i+1)
  }
  return (
      <nav key={pageNumbers}>
        <ul className='paginado' key={pageNumbers}>
          {
            pageNumbers && pageNumbers.map(number => (
              <button href="/#" onClick={() => paged(number)}>{number}</button>
              )
              )}
        </ul>
      </nav>
  )
}

export default Paged