import React from 'react'
import Stomach from './Stomach'

const Halfboil = ({name}) => {
  return (
     <>
        <h1>Halfboil Component</h1>
        <Stomach name={name}/>
     </>
  )
}

export default Halfboil