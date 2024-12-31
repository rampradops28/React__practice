import React from 'react'
import Egg from './Egg'

const Hen = ({name}) => {
  return (
     <>
        <h1>Hen Component</h1>
        <Egg name ={name}/>
     </>
  )
}

export default Hen