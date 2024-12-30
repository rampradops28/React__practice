import React, { useState } from 'react'

const State = () => {
//     const [name,setName] = useState('');
//   return (
//      <div>
//         <button onClick={()=>{
//             if(name == ''){
//                 setName('ram')
//             }
//             else{
//                 setName('')
//             }
               
//         }}>CLICK ME</button>
//         <div>{name}</div>
//      </div>
//   )
    // const [count,setCount] = useState(0);
    // return (
    // <div>
    //     <button onClick={()=>{
    //         setCount(count+1)
                
    //     }}>Increament</button>
    //     <button onClick={()=>{
    //         setCount(count-1)
                
    //     }}>Decreament</button>
    //     <button onClick={()=>{
    //         setCount(0)
                
    //     }}>Reset</button>
    //     <h1>Count: {count}</h1>
    // </div>
    // )

    const [name,setName] = useState('');
    return (
    <div>
         <form >
            <label htmlFor="name">name</label>
            <input type="text" id="name" value={name} onChange={(e) => {
               setName(e.target.value)
            }}/>

            <h3>name: {name}</h3>
         </form>
    </div>
    )
}

export default State