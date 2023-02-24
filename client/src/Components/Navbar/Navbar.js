import React from 'react'
import './Navbar.css';

const Navbar = (props) => {
  return (
  <div className="topnav">
 <button onClick={()=>props.addNote()}><i className="zmdi zmdi-plus"></i></button>
  <a className="" href="#home">Notes</a>
</div>
  )
}

export default Navbar;
