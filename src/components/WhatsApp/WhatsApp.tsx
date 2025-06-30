"use client";
import React from "react";
import Image from "next/image";

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
    <div className="fixed bottom-5 right-5 z-50">
      {/* Botón flotante */}
      <button
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg dark:bg-transparent sm:h-16 sm:w-16"
      >
        {/* Tooltip */}
        <span className="absolute bottom-full right-1/2 mb-2 translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Contáctenos
        </span>

        {/* Imagen optimizada */}
        <Image
          src={imageSrc}
          alt={altText}
          width={82}
          height={62}
          priority={true} // Carga prioritaria
          className="h-auto w-full object-contain"
        />
      </button>
    </div>
  );
};

// Exportamos el componente directamente
export default WhatsAppFloatingButton;