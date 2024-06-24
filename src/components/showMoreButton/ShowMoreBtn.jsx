import React from 'react'
import clases from './showMoreButton.module.css'

function ShowMoreBtn({onClick}) {
  return (
    <>
      <button onClick={onClick} className={clases.button} >show more</button>
    </>
  )
}

export default ShowMoreBtn
