
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const navLinkStyle=({isActive})=>{

    return{
      backgroundColor:isActive ? '#1ABC9C' :'#2C3E50',
      borderRadius:isActive? "3px" :"1px",
     }


  }
  return (
    <nav className={`${style.fullnav} navbar navbar-expand-lg fixed-top`}>
      <Link className={`${style.title}`} to={'/'}>
          Start Framework
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
  
      <ul className={`${style.navbarNav}  me-auto mb-2 mb-lg-0` } >
        <li className={`${style.listItem}`}>
          <NavLink className="nav-link" to={'/about'} style={navLinkStyle}>
            ABOUT
          </NavLink>
        </li>
        <li className={`${style.listItem}`}>
          <NavLink className="nav-link" to={'/portfolio'} style={navLinkStyle}>
            PORTFOLIO
          </NavLink>
        </li>
        <li className={`${style.listItem}`}>
          <NavLink className="nav-link" to={'/contact'} style={navLinkStyle}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
