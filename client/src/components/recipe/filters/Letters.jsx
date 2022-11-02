import React from 'react'
import { useDispatch } from 'react-redux'
import { firstLetter } from '../../../redux/actions'

import s from './Filters.module.css'

const Letters = ({setCurrentPage}) => {
  const dispatch = useDispatch()

  const letter = (e) => {
    dispatch(firstLetter(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={s.divLetter}>
      <button value="a" onClick={(e) => letter(e)}>a</button>
      <button value="b" onClick={(e) => letter(e)}>b</button>
      <button value="c" onClick={(e) => letter(e)}>c</button>
      <button value="d" onClick={(e) => letter(e)}>d</button>
      <button value="e" onClick={(e) => letter(e)}>e</button>
      <button value="f" onClick={(e) => letter(e)}>f</button>
      <button value="g" onClick={(e) => letter(e)}>g</button>
      <button value="h" onClick={(e) => letter(e)}>h</button>
      <button value="i" onClick={(e) => letter(e)}>i</button>
      <button value="j" onClick={(e) => letter(e)}>j</button>
      <button value="k" onClick={(e) => letter(e)}>k</button>
      <button value="l" onClick={(e) => letter(e)}>l</button>
      <button value="m" onClick={(e) => letter(e)}>m</button>
      <button value="n" onClick={(e) => letter(e)}>n</button>
      <button value="o" onClick={(e) => letter(e)}>o</button>
      <button value="p" onClick={(e) => letter(e)}>p</button>
      <button value="q" onClick={(e) => letter(e)}>q</button>
      <button value="r" onClick={(e) => letter(e)}>r</button>
      <button value="s" onClick={(e) => letter(e)}>s</button>
      <button value="t" onClick={(e) => letter(e)}>t</button>
      <button value="u" onClick={(e) => letter(e)}>u</button>
      <button value="v" onClick={(e) => letter(e)}>v</button>
      <button value="w" onClick={(e) => letter(e)}>w</button>
      <button value="x" onClick={(e) => letter(e)}>x</button>
      <button value="y" onClick={(e) => letter(e)}>y</button>
      <button value="z" onClick={(e) => letter(e)}>z</button>
    </div>
  )
}

export default Letters