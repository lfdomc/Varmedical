// components/ImageGallery.js
import Link from 'next/link';
import Image from 'next/image';

const ImageGallery2 = () => {
  const images = [
    { id: 1, src: '/image/var/cristal.webp', alt: 'Equipos de Cristalería', text: 'Cristalería', link: '/page1' },
    { id: 2, src: '/image/var/muestra.webp', alt: 'Toma de muestras', text: 'Insumos para toma de muestras', link: '/page2' },
    { id: 3, src: '/image/var/plastic.avif', alt: 'Plásticos', text: 'Insumos plásticos', link: '/page3' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full p-6 bg-white pb-20 rounded-lg shadow-lg">
      {images.map((image) => (
        <Link key={image.id} href={image.link} passHref>
          <div className="group relative w-68 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
            {/* Imagen */}
            <div className="relative w-full h-68 rounded-lg shadow-md overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={300} // Establece un ancho fijo para la imagen (ajusta según tus necesidades)
                height={300} // Establece una altura fija para la imagen (ajusta según tus necesidades)
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            {/* Texto debajo de la imagen */}
            <div className="mt-2 text-center text-gray-800 font-semibold group-hover:text-blue-1000 group-hover:text-2xl transition-colors duration-300 text-xl">
              {image.text}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery2;