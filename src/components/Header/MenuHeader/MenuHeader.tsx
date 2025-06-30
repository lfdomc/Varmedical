import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";



const Section = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 2px;
`;

interface UlProps {
  $isOpen: boolean;
}

const Ul = styled.ul<UlProps>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 554px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 165px;  /* Ajuste de la posición vertical */
    left: 80%;
    transform: translateX(-100%);  /* Centrado horizontal */
    background-color: #500053;
    width: 200px;
    flex-direction: column;
    border-radius: 60px;
    gap: 10px;
    padding: 2px;
    z-index: 300;
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items:flex-end;
  justify-content: center;
  width: 150px;
  height: 35px;
  
  border-radius: 0px;
  border-top-right-radius: 80px;
  border-top-left-radius:80px;
  background-color: transparent;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #eef0f2;
    color: #430c61;
    transform: scale(1.05);
  }
`;


const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  &:hover {
    
    
    color: #430c61;
    transform: scale(1.1);
  }
  span {
    width: 35px;
    height: 6px;
    background-color: #e8dae6;
    border-radius: 5px;
    
  }

  @media (max-width: 554px) {
    display: flex;
  }
`;

function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Función para cerrar el menú

  return (
    <Section>
      
      <Nav>
        <Hamburger onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        
        <Ul $isOpen={isOpen}>

          <li>
            
            <StyledLink to="/" onClick={closeMenu}>Inicio</StyledLink>
            
          </li>
          <li>
            <StyledLink to="/servicios" onClick={closeMenu}>Sucursales</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact" onClick={closeMenu}>Contácto</StyledLink>
          </li>
          <li>

      
          </li>
          
          

          
        </Ul>
      </Nav>
      
    </Section>
  

  );
}

export default MenuHeader;
