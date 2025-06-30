"use client";

// components/ImageGallery.js
import Link from "next/link";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    { id: 1, src: "/image/var/marcas/Liofilchem.png", alt: "Reactivos Liofilchem", text: "Liofilchem", link: "/page1" },
    { id: 2, src: "/image/var/marcas/BioTek.png", alt: "Reactivos BioTek", text: "BioTek", link: "/page2" },
    { id: 3, src: "/image/var/marcas/IMMUNO.png", alt: "Reactivos IMMUNO Concepts", text: "Immuno Concepts", link: "/page3" },
    { id: 4, src: "/image/var/marcas/BIOTEST.png", alt: "Reactivos BIOTEST", text: "Biotest", link: "/page4" },
    { id: 5, src: "/image/var/marcas/DIAMOND.png", alt: "Reactivos DIAMOND", text: "Diamond ", link: "/page5" },
    { id: 6, src: "/image/var/marcas/VITASSAY.png", alt: "Reactivos VITASSAY", text: "Vitassay", link: "/page5" },
    { id: 7, src: "/image/var/marcas/SPINREACT.png", alt: "Reactivos SPINREACT", text: "Spinreact", link: "/page5" },
    { id: 8, src: "/image/var/marcas/VIRION.png", alt: "Reactivos VIRION", text: "Virion/Serion", link: "/page5" },
    { id: 9, src: "/image/var/marcas/lp-italiana.png", alt: "Reactivos lp-italiana", text: "LP Italiana", link: "/page5" },
    { id: 10, src: "/image/var/marcas/UNICO.png", alt: "Reactivos UNICO", text: "Unico", link: "/page5" },
    { id: 11, src: "/image/var/marcas/DENKA.png", alt: "Reactivos DENKA", text: "Denka Seiken", link: "/page5" },
    { id: 12, src: "/image/var/marcas/DIAMETRA.png", alt: "Reactivos DIAMETRA", text: "Diametra", link: "/page5" },
    { id: 13, src: "/image/var/marcas/IMMY.png", alt: "Reactivos IMMY", text: "Immy", link: "/page5" },
    { id: 14, src: "/image/var/marcas/ACON.png", alt: "Reactivos ACON", text: "Acon", link: "/page5" },
    { id: 15, src: "/image/var/marcas/EDAN.png", alt: "Reactivos EDAN", text: "Edan", link: "/page5" },
    { id: 16, src: "/image/var/marcas/HARDY.png", alt: "Reactivos HARDY", text: "Hardy", link: "/page5" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full p-6 bg-white pb-20 rounded-lg shadow-lg">
      {images.map((image) => (
        <Link key={image.id} href={image.link} passHref>
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