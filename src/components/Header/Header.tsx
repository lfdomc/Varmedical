"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/clientdata/clientInfo";

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
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
    display: block;
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
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Encabezado */}
      <HeaderContainer>
        {/* Logo envuelto en un Link para redirigir a la página de inicio */}
        <Link href="/" aria-label="Inicio">
          <Image
            src={logo}
            alt="Logo"
            width={220}
            height={80}
            priority
            style={{ objectFit: "contain" }}
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
          aria-label="Menú móvil"
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