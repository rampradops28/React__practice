import React, { useContext } from 'react'
import Egg from './Egg'
import { nameContext } from '../Ram'

const Hen = () => {
//    let {name,age,location} = useContext(nameContext);
//   return (
//      <>
//         <h1>Hen Component :</h1>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{location}</h1>
//         <Egg />
//      </>
   return(
      <>
         <Egg />
      </>
  )
}

export default Hen