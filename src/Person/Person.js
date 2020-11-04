import React from 'react'
import './Person.css'

const person = (props) => {

   return  (
   <div className="person">
  <h1 onClick={props.click}> My Name is  {props.name} my age {props.age}  old </h1>
 <p> {props.children}</p>
 <input type="text"  onChange={props.changed} value={props.name} />

   </div>

);
}

export default person