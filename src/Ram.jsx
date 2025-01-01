import React, { createContext, useMemo, useState } from 'react' 
import Fun from './components/Child'
import State from './components/State'
import Dog from './components/Dog'
import Task1 from './components/Task1'
import Effect from './components/Effect'
import Ref from './components/Ref'
import Hen from './components/Hen'

export let nameContext = createContext();

const Ram = () => {

   // let name = "Hello"
    // let no = 10

    // const [msg, setMsg] = useState("");

    // const func = (val) => {
    //   setMsg(val);
    // }

    const[num, setNum] = useState(0)
    const[dark, setDark] = useState(false)
//usememo => 
    // let doubleNum = slowFunc(num)
    let doubleNum = useMemo(() => {
      return slowFunc(num)
    },[num])

    let themeStyle = useMemo(() => {
      return{
      backgroundColor : dark ? "black" : "white",
      color : dark ? "white" : "black"
      }
    },[dark])
    // const[bg, setBg] = useState("white")
    // const[color, setColor] = useState("black")
    
    // function click(){
    //   setBg(bg === "white" ? "black" : "white")
    //   setColor(color === "black" ? "white" : "black")
    // }

   
  return (
    <div>
        {/* < nameContext.Provider value={{color , bg}}>
          <button onClick={click}>Click ME</button>
          <Hen />
        </nameContext.Provider> */}

        <input type="numebr" value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => setDark((val) => !val)}>Change Theme</button>
        <div style={themeStyle} > {doubleNum}></div>

        {/* <Dog name = {name} no = {no}/> */}
        {/* <h3>Message From child Component: {msg}</h3>
        <Fun name = {name} onSendMsg = {func}/>   */}
        {/* <State />   */}
        {/* <Task1 /> */}
        {/* <Effect /> */}
        {/* <Ref /> */}
        {/* <nameContext.Provider  value={{name: "Chicken",age: 10,location: "erode"}}>
              <Hen />
        </nameContext.Provider> */}
       
    </div>
  )
}

export default Ram

function slowFunc(val) {
  console.log("slow function")
  for(let i=0;i<1000000000;i++) {}
  return val*2;
}