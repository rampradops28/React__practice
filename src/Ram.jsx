import React, { useState } from 'react' 
import Fun from './components/Child'
import State from './components/State'
import Dog from './components/Dog'
import Task1 from './components/Task1'
import Effect from './components/Effect'
import Ref from './components/Ref'
import Hen from './components/Hen'

const Ram = ( ) => {

    
    let name = "Hello"
    let no = 10

    const [msg, setMsg] = useState("");

    const func = (val) => {
      setMsg(val);
    }
  return (
    <div>
        {/* <Dog name = {name} no = {no}/> */}
        {/* <h3>Message From child Component: {msg}</h3>
        <Fun name = {name} onSendMsg = {func}/>   */}
        {/* <State />   */}
        {/* <Task1 /> */}
        {/* <Effect /> */}
        {/* <Ref /> */}
        <Hen name= "water"/>
    </div>
  )
}

export default Ram