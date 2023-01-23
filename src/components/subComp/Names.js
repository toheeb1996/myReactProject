import React from 'react'

const Names = (props) => {
  let name = props.name
  let occupation = props.occupation
  let age = props.age
  let city = props.city
  return (
    <div>
      <h3>My name is {name}</h3>
      <h4>My occupation is {occupation}</h4>
      <h5>My age is {age}</h5>
      <h6>I live in {city}</h6>
    </div>
  )
}

export default Names