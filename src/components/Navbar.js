import React from "react";
import { GiHamburger } from "react-icons/gi";
import Widget from "./Widget";
import {
    Container,
    Wrapper,
    LogoContainer,
    Menu,
    MenuItem,
    MenuItemLink} from "./Navbar.elements"

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LogoContainer href="#">
                <GiHamburger />
                <p>WildBurger</p>
            </LogoContainer>
            <Menu>
                <MenuItem>
                    <MenuItemLink href="#">
                        INICIO
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>    
                    <MenuItemLink href="#">
                        MENU                                      
                    </MenuItemLink>                
                </MenuItem>
                <MenuItem>    
                    <MenuItemLink href="#">
                        BEBIDAS                                      
                    </MenuItemLink>                
                </MenuItem>
                <MenuItem>    
                    <MenuItemLink href="#">
                        POSTRES                                      
                    </MenuItemLink>                
                </MenuItem>
                <MenuItem>    
                    <MenuItemLink href="#">
                        NOSOTROS
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>    
                    <MenuItemLink href="#">
                        <Widget />
                    </MenuItemLink>
                </MenuItem>
            </Menu>
        </Wrapper>    
    </Container> 

  );
}

export default Navbar;
