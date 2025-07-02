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

          {/* Columna 2: Enlaces útiles (ocultos en móviles) */}
          <div className="hidden md:flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Enlaces útiles</h2>
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
            <h2 className="text-lg font-semibold mb-4">Contacto</h2>
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
                  src="/Redes/fbw.webp"
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
                href="https://maps.app.goo.gl/djyFJ8NYZxZhZtJx7"
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
            href="https://www.crtemsa.com "
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