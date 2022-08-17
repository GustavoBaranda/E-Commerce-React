import React, { useState } from 'react';
import { GiHamburger } from 'react-icons/gi';
import Widget from '../Widget/Widget';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

  return (
        <nav className="navbar">
            <div className="LogoContainer">
                <Link to="/">
                    <GiHamburger />
                </Link>
                <Link to="/">
                    <p className="Logo">Rodolfo's Beer&Burger</p>
                </Link>                
            </div>
            <div className="cartmobile">
                <Link className="Widget" to="/cart">
                    <Widget />
                </Link> 
            </div>            
            <ul className={ isMobile ? "nav-links-mobile" : "nav-links" }
            onClick={() => setIsMobile(false)}
            >
                <NavLink className="NavLink" to="/">
                    <li>MENU</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/categoria/hamburguesas">
                    <li>HAMBURGUESAS</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/categoria/acompanamiento">
                    <li>ACOMPAÑAMIENTO</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/categoria/bebidas">
                    <li>BEBIDAS</li>                                        
                </NavLink>                
                <NavLink className="NavLink" to="/categoria/postres">
                    <li>POSTRES</li>                                       
                </NavLink>
                <div className="cartdesk">
                    <Link className="Widget" to="/cart">
                        <Widget />
                    </Link> 
                </div>
                 
            </ul>
            
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {
                    isMobile  ?
                    ( 
                    <FaTimes /> 
                    ):(
                    <FaBars/>
                    )
                }
            </button>
        </nav>
  );
}

export default Navbar;
