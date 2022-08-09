import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import './Footer.css'


function Footer() {
    return (
      <footer className="footerContainer">
        <div className="footer">
            <a href="" className="text">
                ¿Quienes somos?
            </a>
            <a href=""className="text">
                Contacto
            </a>
            <a href="" className="text">
                Trabaja con Nosotros
            </a>
        </div>
        <div className="icon">
                <a href="https://github.com/GustavoBaranda" target="blank">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/gustavobaranda/" target="blank">
                    <FaLinkedin />
                </a>
                <a href="https://wa.me/5491121664771" target="blank">
                    <FaWhatsappSquare />
                </a>
                <a href="mailto:baranda.gustavo@gmail.com">
                    <ImMail />
                </a>
        </div>
        <div>
            <p className="text">Copyright © 2022 - All right reserved by Rodolfo's Beer&Burger</p>
        </div>
        <div>
            <p  className="text">Gustavo Baranda Front-End Developer</p>
        </div>
    
      </footer>
    )
  }
  export default Footer;