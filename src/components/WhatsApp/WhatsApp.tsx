"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

// Styled components optimizados
const WhatsAppButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #25D366;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 420px) {
    width: 55px;
    height: 55px;
  }

  // Soporte para modo oscuro
  @media (prefers-color-scheme: dark) {
    background: transparent;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 110%;
  right: 50%;
  transform: translateX(50%);
  background: #333;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;

  ${WhatsAppButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

// Tipado para las props del componente
type WhatsAppProps = {
  phoneNumber: string;
  imageSrc: string;
  altText?: string;
};

// Componente principal
const WhatsAppFloatingButton: React.FC<WhatsAppProps> = ({
  phoneNumber,
  imageSrc,
  altText = "WhatsApp Button",
}) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank"); 
  };

  return (
    <WhatsAppButton onClick={handleClick} aria-label="Contact us on WhatsApp">
      {/* Tooltip dinámico */}
      <Tooltip>Contáctenos</Tooltip>

      {/* Imagen optimizada */}
      <Image
        src={imageSrc}
        alt={altText}
        width={82}
        height={62}
        priority={true} // Carga prioritaria
      />
    </WhatsAppButton>
  );
};

// Exportamos el componente directamente
export default WhatsAppFloatingButton;