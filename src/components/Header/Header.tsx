"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/clientdata/clientInfo";

// Styled Components
const HeaderContainer = styled.header`
  position: fixed; // Hace que el header sea fijo
  top: 0; // Asegura que esté en la parte superior
  left: 0; // Asegura que comience desde el borde izquierdo
  right: 0; // Asegura que cubra todo el ancho
  z-index: 1000; // Asegura que esté por encima de otros elementos
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; // Ocultar menú en pantallas pequeñas
  }
`;

const MenuItem = styled(Link)`
  color: #181313;
  text-decoration: none;
  font-size: 1.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0b00d4;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #080404;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block; // Mostrar botón en pantallas pequeñas
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #04396f;
  transition: right 0.3s ease-in-out;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1000;
`;

const MobileMenuItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic ocurrió fuera del menú y fuera del botón del menú
      const target = event.target as HTMLElement; // Convertimos el tipo a HTMLElement
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Agrega el evento al documento
    document.addEventListener("click", handleClickOutside);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Encabezado */}
      <HeaderContainer>
        {/* Logo envuelto en un Link para redirigir a la página de inicio */}
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="Logo"
            width={220} // Define el ancho
            height={220} // Define la altura
            priority={true}
            style={{
              objectFit: "contain", // Asegura que la imagen mantenga su relación de aspecto
              width: "auto", // Asegura que el ancho se ajuste automáticamente si es necesario
              height: "80px", // Altura fija para el logo
            }}
          />
        </Link>

        {/* Menú de navegación para pantallas grandes */}
        <NavMenu>
          <MenuItem href="/">Inicio</MenuItem>
          <MenuItem href="/equips">Equipos</MenuItem>
          <MenuItem href="/inputs">Insumos</MenuItem>
          <MenuItem href="/marcas">Marcas</MenuItem>
          <MenuItem href="/about">Sobre Nosotros</MenuItem>
          <MenuItem href="/contact">Contacto</MenuItem>
        </NavMenu>

        {/* Botón del menú móvil */}
        <MobileMenuButton
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          ☰
        </MobileMenuButton>
      </HeaderContainer>

      {/* Menú móvil */}
      <MobileMenu $isOpen={isMobileMenuOpen} className="mobile-menu">
        <MobileMenuItem href="/" onClick={toggleMobileMenu}>
          Inicio
        </MobileMenuItem>
        <MobileMenuItem href="/equips" onClick={toggleMobileMenu}>
          Equipos
        </MobileMenuItem>
        <MobileMenuItem href="/inputs" onClick={toggleMobileMenu}>
          Insumos
        </MobileMenuItem>
        <MobileMenuItem href="/marcas" onClick={toggleMobileMenu}>
          Nuestras Marcas
        </MobileMenuItem>
        <MobileMenuItem href="/about" onClick={toggleMobileMenu}>
          Sobre Nosotros
        </MobileMenuItem>
        <MobileMenuItem href="/contact" onClick={toggleMobileMenu}>
          Contacto
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
};

export default Header;