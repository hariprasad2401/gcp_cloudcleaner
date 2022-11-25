import React from 'react'
import logo from './logo.png'
export default function LoginHeader() {
    return(
<nav class="navbar navbar-light loginNavbar  justify-content-between">
  <a class="navbar-brand Heading">Cloud Cleaner</a>
  <form class="form-inline">
  <a className="navbar-brand" href="#">
      {/* <img src="../Images/cloudthat_logo.png" alt="" width="30" height="24"/> */}
      {/* <img src={logo} alt="" width="70" height="54"/> */}
      <img src={logo} alt="Logo" width="150" height="25" className="d-inline-block align-text-top  "/>
      
    </a>
  </form>
</nav>
    )}
