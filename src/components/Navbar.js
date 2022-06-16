import './Navbar.css';
import logo from './logo.png';


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarLink">
            <div className="logo">
                <img 
                    href="#"
                    src={logo} width="70"
                    height="70"
                />
            </div>
            <a href="#">
                Home
            </a>
            <a href="#">
                Productos
            </a>
            <a href="#">
                Nosotros
            </a>
            <a href="#">
                Contactanos
            </a>    
        </div>
    </div>
  );
}

export default Navbar;
