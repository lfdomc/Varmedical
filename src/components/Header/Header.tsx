"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/clientdata/clientInfo";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md">
        {/* Logo envuelto en un Link para redirigir a la página de inicio */}
        <Link href="/" aria-label="Inicio" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={220}
            height={80}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden gap-6 text-lg font-medium text-gray-800 md:flex">
          <Link
            href="/"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/equips"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Equipos
          </Link>
          <Link
            href="/inputs"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Insumos
          </Link>
          <Link
            href="/marcas"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Marcas
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón del menú móvil */}
        <button
          className="text-2xl text-gray-800 cursor-pointer md:hidden mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Menú móvil"
        >
          ☰
        </button>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-blue-900 shadow-lg p-8 z-50 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } mobile-menu`}
      >
        <nav className="flex flex-col gap-6 text-white">
          <Link
            href="/"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Inicio
          </Link>
          <Link
            href="/equips"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Equipos
          </Link>
          <Link
            href="/inputs"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Insumos
          </Link>
          <Link
            href="/marcas"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Nuestras Marcas
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;