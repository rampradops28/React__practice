import React from 'react'

const Contactus = () => {
  return (
    <form action="#">
    <div className="form-group">
        <label htmlFor="name">NAME :</label>
        <input type="text" id="name" class="un"/>
    </div>

    <div className="form-group">
        <label htmlFor="nckname">EMAIL :</label>
        <input type="text" id="nckname" class="un"/>
    </div>

    <div className="form-group">
        <label htmlFor="add">ADDRESS :</label>
        <input type="text" id="add" class="un"/>
    </div>

    <div className="form-group">
        <label htmlFor="phno">PHONE :</label>
        <input type="text" id="phno" class="un"/>
    </div>

     
    </form>
  )
}

export default Contactus