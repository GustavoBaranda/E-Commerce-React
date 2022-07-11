import React from "react";
import { GiHamburger } from "react-icons/gi";
import Widget from "../Widget/Widget";
import { Link } from 'react-router-dom';
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
                        <Link className="Link" to="/">
                            MENU                                      
                        </Link>                
                        <Link className="Link" to="/categoria/hambuerguesas">
                            HAMBURGUESAS                                      
                        </Link>                
                        <Link className="Link" to="/categoria/acompanamiento">
                            ACOMPAÑAMIENTO                                      
                        </Link>                
                        <Link className="Link" to="/categoria/bebidas">
                            BEBIDAS                                      
                        </Link>                
                        <Link className="Link" to="/categoria/postres">
                            POSTRES                                      
                        </Link>                
                    </li>
                </ul>
            </div>
            <div className="Widget">
                <Link className="Link" to="/cart">
                    <Widget />
                </Link>
            </div>
        </div>    
    </div> 

  );
}

export default Navbar;
