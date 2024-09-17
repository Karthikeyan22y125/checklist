import React from 'react'

const Header = (props) => {
  return (
    <header>
    <h1>{props.title}'s 
    <br/>
    CHECK LIST</h1>
    </header>
  )
}
// Header.defaultProps =>{
//     title:"CHECH LIST"
// }

export default Header