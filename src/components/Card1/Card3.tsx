"use client";

// components/ImageGallery.js
import Link from "next/link";
import Image from "next/image";


const ImageGallery = () => {
  const images = [
    { id: 1, src: "/image/var/marcas/Liofilchem.webp", alt: "Reactivos Liofilchem", text: "Liofilchem", link: "https://www.liofilchem.com/" },
    { id: 2, src: "/image/var/marcas/BioTek.webp", alt: "Reactivos BioTek", text: "BioTek", link: "https://www.agilent.com/" },
    { id: 3, src: "/image/var/marcas/IMMUNO.webp", alt: "Reactivos IMMUNO Concepts", text: "Immuno Concepts", link: "https://immunoconcepts.com/" },
    { id: 4, src: "/image/var/marcas/BIOTEST.webp", alt: "Reactivos BIOTEST", text: "Biotest", link: "https://es.biotestrt.com/" },
    { id: 5, src: "/image/var/marcas/DIAMOND.webp", alt: "Reactivos DIAMOND", text: "Diamond ", link: "https://www.diamonddiagnostics.com/" },
    { id: 6, src: "/image/var/marcas/VITASSAY.webp", alt: "Reactivos VITASSAY", text: "Vitassay", link: "https://vitassay.com/es/homepage-2-2/" },
    { id: 7, src: "/image/var/marcas/SPINREACT.webp", alt: "Reactivos SPINREACT", text: "Spinreact", link: "https://www.spinreact.com/es/inicio.html#accept" },
    { id: 8, src: "/image/var/marcas/VIRION.webp", alt: "Reactivos VIRION", text: "Virion/Serion", link: "https://www.virion-serion.de/en/" },
    { id: 9, src: "/image/var/marcas/lp-italiana.webp", alt: "Reactivos lp-italiana", text: "LP Italiana", link: "https://www.lpitaliana.com/" },
    { id: 10, src: "/image/var/marcas/UNICO.webp", alt: "Reactivos UNICO", text: "Unico", link: "https://unicosci.com/" },
    { id: 11, src: "/image/var/marcas/DENKA.webp", alt: "Reactivos DENKA", text: "Denka Seiken", link: "https://www.denka.co.jp/eng/#top" },
    { id: 12, src: "/image/var/marcas/DIAMETRA.webp", alt: "Reactivos DIAMETRA", text: "Diametra", link: "https://diametra.com/" },
    { id: 13, src: "/image/var/marcas/IMMY.webp", alt: "Reactivos IMMY", text: "Immy", link: "https://www.immy.com/" },
    { id: 14, src: "/image/var/marcas/ACON.webp", alt: "Reactivos ACON", text: "Acon", link: "https://www.aconlabs.com/" },
    { id: 15, src: "/image/var/marcas/EDAN.webp", alt: "Reactivos EDAN", text: "Edan", link: "https://www.edan.com/" },
    { id: 16, src: "/image/var/marcas/HARDY.webp", alt: "Reactivos HARDY", text: "Hardy", link: "https://hardydiagnostics.com/" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full p-6 bg-white pb-20 rounded-lg shadow-lg">
      {images.map((image) => (
        <Link key={image.id} href={image.link} passHref
        target="_blank"
        rel="noopener noreferrer"
        >
          <div className="group relative cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
            {/* Contenedor de la imagen */}
            <div className="relative w-[120px] h-[50px] rounded-lg shadow-md overflow-hidden flex items-center justify-center">
              
                <Image
                src={image.src}
                alt={image.alt}
                fill // Usamos "fill" para que la imagen ocupe todo el espacio del contenedor
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
                
              
              
            </div>
            {/* Texto debajo de la imagen */}
            <div
              className="mt-2 text-center text-gray-800 font-semibold group-hover:text-blue-900 transition-colors duration-300 
                         text-sm sm:text-base line-clamp-2 break-words"
              style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
            >
              {image.text}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;