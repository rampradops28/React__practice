 import React from 'react'
 
 const Child = (props) => {

  const handleMsg = () => {
    const msg = "Hello! I am from Child Component"
    props.onSendMsg(msg);
  }
   return (
      <div>
        <h1>{props.name} Everyone!</h1>
        <button onClick={handleMsg}>Send Msg to Parent</button>
      </div>
   )
 }
 
 export default Child