"use client";
import React from "react";

// Definimos la interfaz para las props del componente
interface Info {
  image?: string;
  h1?: string;
  color: string; // Color de fondo
  fcolor: string; // Color del texto
}

const Banner = ({ h1, color, fcolor }: Info) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center w-full gap-2 pt-8 pb-12 bg-[${color}]`}
    >
      {/* H1 con estilos responsivos */}
      <h1
        className={`text-center font-dosis font-black text-[1.5rem] border-b-[3px] border-[#0575f8] leading-none text-[${fcolor}] 
          sm:text-[1.5rem] 
          md:text-[2.5rem] 
          lg:text-[2.5rem] 
          xl:text-[2.5rem] 
          2xl:text-[2.5rem]
          max-w-[90%] mx-auto px-4 py-2 mt-16
          sm:mt-20 
          md:mt-12 
          lg:mt-20 
          xl:mt-20 
          2xl:mt-20`}
        style={{
          backgroundColor: color,
          color: fcolor,
        }}
      >
        {h1}
      </h1>
    </div>
  );
};

export default Banner;