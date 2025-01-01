import React, { useContext } from 'react'
import { nameContext } from '../Ram'
import Halfboil from './Halfboil'

const Stomach = () => {
 let{color,bg} = useContext(nameContext)
  return (
     <>
        <h1 style={{color: color , backgroundColor: bg}}>Stomach</h1>
     </>
  )
}

export default Stomach