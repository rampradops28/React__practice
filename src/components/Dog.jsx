import React from 'react'

const Dog = (props) => {
    let names = "Guys"
    let num = 20
  return (
    <div>
        <h1>{props.name+ " " +names}</h1><br />
         <h1>
             {props.no + num}
         </h1>
    </div>
  )
}

export default Dog