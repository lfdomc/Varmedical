"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/clientdata/clientInfo";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isEquipDropdownOpen, setIsEquipDropdownOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleEquipDropdown = (): void => {
    setIsEquipDropdownOpen((prev) => !prev);
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
      if (
        isEquipDropdownOpen &&
        !target.closest(".equip-dropdown") &&
        !target.closest(".equip-dropdown-button")
      ) {
        setIsEquipDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, isEquipDropdownOpen]);

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
            style={{ width: "auto", height: "auto" }} // Mantener la relación de aspecto
            className="object-contain max-w-[220px] max-h-[80px]" // Asegurar que no exceda las dimensiones máximas
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
          {/* Dropdown para Equipos */}
          <div className="relative equip-dropdown">
            <button
              className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300 cursor-pointer equip-dropdown-button"
              onClick={toggleEquipDropdown}
            >
              Equipos ▼
            </button>
            {isEquipDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-blue-900 shadow-md rounded-md overflow-hidden equip-dropdown">
                <Link
                  href="/equips"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Todas las Líneas
                </Link>
                <Link
                  href="/quimic"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Química
                </Link>
                <Link
                  href="/hematology"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Hematología
                </Link>
                {/* Agregando Coagulación */}
                <Link
                  href="/coagula"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Coagulación
                </Link>
                {/* Agregando Inmunología */}
                <Link
                  href="/inmuno"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Inmunología
                </Link>
                {/* Agregando Electrolitos */}
                <Link
                  href="/electrolit"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                  }}
                >
                  Electrolitos
                </Link>
              </div>
            )}
          </div>
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
          {/* Dropdown para Equipos en versión móvil */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-lg hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              onClick={toggleEquipDropdown}
            >
              Equipos ▼
            </button>
            {isEquipDropdownOpen && (
              <div className="mt-2 space-y-2 bg-blue-900 rounded-md shadow-md">
                <Link
                  href="/equips"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Todas las Líneas
                </Link>
                <Link
                  href="/quimic"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Química
                </Link>
                <Link
                  href="/hematology"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Hematología
                </Link>
                {/* Agregando Coagulación */}
                <Link
                  href="/coagula"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Coagulación
                </Link>
                {/* Agregando Inmunología */}
                <Link
                  href="/inmuno"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Inmunología
                </Link>
                {/* Agregando Electrolitos */}
                <Link
                  href="/electrolit"
                  className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    toggleEquipDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Electrolitos
                </Link>
              </div>
            )}
          </div>
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