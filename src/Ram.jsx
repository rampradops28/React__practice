import React from 'react'
import Dog from './components/Dog' 
import Fun from './components/Fun'
import State from './components/State'
const Ram = ( ) => {
    let name = "Hello"
  return (
    <div>
        <Dog name = {name}/>
        <Fun name = {name}/>  
        <State />  
    </div>
  )
}

export default Ram