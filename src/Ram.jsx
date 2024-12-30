import React from 'react' 
import Fun from './components/Fun'
import State from './components/State'
const Ram = ( ) => {
    let name = "Hello"
    let no = 10
  return (
    <div>
        <Dog name = {name} no = {no}/>
        {/* <Fun name = {name}/>  
        <State />   */}
    </div>
  )
}

export default Ram