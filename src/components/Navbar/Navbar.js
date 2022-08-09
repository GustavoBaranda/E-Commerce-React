import React from 'react';
import { GiHamburger } from 'react-icons/gi';
import Widget from '../Widget/Widget';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (

    <div className="Container">
        <div className="Wrapper">
            <div className="LogoContainer">
                <Link to="/">
                    <GiHamburger />
                </Link>
                <p>Rodolfo's Beer&Burger</p>
            </div>
            <nav className="navegacion">
                <ul className="Menu">
                    <li className="MenuItem">
                        <NavLink className="NavLink" to="/">
                            MENU                                      
                        </NavLink>                
                        <NavLink className="NavLink" to="/categoria/hamburguesas">
                            HAMBURGUESAS                                      
                        </NavLink>                
                        <NavLink className="NavLink" to="/categoria/acompanamiento">
                            ACOMPAÑAMIENTO                                      
                        </NavLink>                
                        <NavLink className="NavLink" to="/categoria/bebidas">
                            BEBIDAS                                      
                        </NavLink>                
                        <NavLink className="NavLink" to="/categoria/postres">
                            POSTRES                                      
                        </NavLink>                
                    </li>
                </ul>
                <div className="Widget">
                    <Link className="Widget" to="/cart">
                        <Widget />
                    </Link>
                </div>
            </nav>
            
            
        </div>    
    </div> 

  );
}

export default Navbar;
