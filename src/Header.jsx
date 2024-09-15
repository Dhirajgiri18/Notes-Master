import React, { Fragment } from "react";
import logo from './Images/logo.png';




export const Header = () => {
  return (
    <Fragment>
    
    <div className="Header">
    <img src={logo} alt="logo" className="logo" width="70" height="50"/>
    <h1>Make Notes</h1>
    </div>
    
    
    </Fragment>
  )
}


export default Header;