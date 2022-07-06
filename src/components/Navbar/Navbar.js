import React from "react";
import { GiHamburger } from "react-icons/gi";
import Widget from "../Widget/Widget";
import { Link ,NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (

    <div className="Container">
        <div className="Wrapper">
            <div className="LogoContainer">
                <Link to="/">
                    <GiHamburger />
                </Link>
                <p>Rodolfo Beer&Burger</p>
            </div>
            <div className="navegacion">
                <ul className="Menu">
                    <li className="MenuItem">
                        <NavLink className="Link" to="/" activeClassName="active">
                            MENU                                      
                        </NavLink>                
                        <NavLink className="Link" to="/categoria/hambuerguesas" activeClassName="active">
                            HAMBURGUESAS                                      
                        </NavLink>                
                        <NavLink className="Link" to="/categoria/acompanamiento" activeClassName="active">
                            ACOMPAÑAMIENTO                                      
                        </NavLink>                
                        <NavLink className="Link" to="/categoria/bebidas" activeClassName="active">
                            BEBIDAS                                      
                        </NavLink>                
                        <NavLink className="Link" to="/categoria/postres" activeClassName="active">
                            POSTRES                                      
                        </NavLink>                
                    </li>
                </ul>
            </div>
            <div className="Widget">
                <NavLink className="Link" to="/carrito" activeClassName="active">
                    <Widget />
                </NavLink>
            </div>
        </div>    
    </div> 

  );
}

export default Navbar;
