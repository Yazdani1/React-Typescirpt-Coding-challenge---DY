import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../../contextapi/UserContext";
import navbarStyle from "./Navbar.module.scss";


const NavbarAdmin = () => {

    let navigate = useNavigate();

    // to use context api
 const [state,setState] = useContext(UserContext);

 const logOut = () => {
   window.localStorage.removeItem("tokenLogin");
   window.localStorage.removeItem("token");
   navigate("/");
   setState("");
 };




  return (
    <nav className={navbarStyle.navbarContainer}>
    <ul>
      <li className="nav-item">
        <Link
          to={"/admin"}
          style={{ textDecoration: "none",color: "white"}}
        >
          {state && state.user && state.user?.teamname}. {state && state.user && state.user?.role}
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to={"/admin"}
          style={{ textDecoration: "none", color: "white" }}
        >
          {state && state.user && state.user?.email}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/admin"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Admin
        </Link>
      </li>


      <li className="nav-item" onClick={logOut} style={{cursor:"pointer"}}>
        
          Log Out
     
      </li>
    </ul>
</nav>
  )
}

export default NavbarAdmin