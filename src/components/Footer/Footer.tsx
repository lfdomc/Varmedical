import Image from 'next/image';
import Link from 'next/link';
import { logo2 } from '@/clientdata/clientInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="Volver al inicio">
              <Image
                src={logo2}
                alt="Logo"
                width={150}
                height={150}
                className="mb-4 w-auto h-auto" 
              />
            </Link>
            <p className="text-sm text-center md:text-left">
              VAR Medical es una empresa dedicada a brindar soluciones innovadoras.
            </p>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Enlaces útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/equips" className="hover:text-blue-400 transition-colors">
                  Equipos
                </Link>
              </li>
              <li>
                <Link href="/inputs" className="hover:text-blue-400 transition-colors">
                  Insumos
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-blue-400 transition-colors">
                  Nuestras Marcas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm mb-2">Teléfono: +506 4000-1230</p>
            <p className="text-sm mb-2">Email: info@varmedical.com</p>
            <p className="text-sm mb-2">Direccion: Alajuela Costa Rica</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/varmedical/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Image
                  src="/Redes/fbw.png"
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                  className="social-icon hover:opacity-80 transition-opacity w-auto h-auto"
                />
              </a>
              <a
                href=" https://www.instagram.com/varmedical/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <Image
                  src="/Redes/instagramw.webp"
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className="social-icon hover:opacity-80 transition-opacity w-auto h-auto"
                />
              </a>
              <a
                href=" https://www.google.com/maps/dir/10.0087612 ,-84.2387645/VAR+MEDICAL,+Provincia+de+Alajuela,+Alajuela,+Lor%C3%ADa/@10.0222848,-84.2547899,14z/data=!3m1!4b1!4m17!1m7!3m6!1s0x8fa0f702d9b1fc41:0x73dc71c1c4bceb37!2sVAR+MEDICAL!8m2!3d10.036166!4d-84.224466!16s%2Fg%2F11rwyks2hy!4m8!1m1!4e1!1m5!1m1!1s0x8fa0f702d9b1fc41:0x73dc71c1c4bceb37!2m2!1d-84.2244579!2d10.0361516?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="hover:text-blue-600 transition-colors"
              >
                <Image
                  src="/Redes/maps.webp"
                  alt="Google Maps Icon"
                  width={24}
                  height={24}
                  className="social-icon hover:opacity-80 transition-opacity w-auto h-auto"
                />
              </a>
              {/* Ícono de YouTube */}
              <a
                href="https://www.youtube.com/channel/UCOXk1pvP9Ld9CgalKqmGXOA/videos "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors"
              >
                <Image
                  src="/Redes/youtube.webp"
                  alt="YouTube Icon"
                  width={24}
                  height={24}
                  className="social-icon hover:opacity-80 transition-opacity w-auto h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados. Desarrollado por{' '}
          <a
            href="https://www.crtemsa.com  "
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition-colors"
          >
            Temsa Tecnología
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;