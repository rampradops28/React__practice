import React, { useState ,useRef} from 'react'

const Ref = () => {

    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    let increment = () => {
        setCount(count+1)
        countRef.current++;

        console.log("UseState value: ",count)
        console.log("UseRef value:" ,countRef.current);
    }
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+++++</button>
    </>
  )
}

export default Ref