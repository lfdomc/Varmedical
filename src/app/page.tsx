import Banner1 from "@/components/Banner/Banner";
import BetterBannerImg from "@/components/BetterBanner/BetterBannerImg";
import BetterBanner from "@/components/BetterBanner/BetterBanner";
import Image from "next/image";
import Card1 from "@/components/Card1/Card1";
import Card2 from "@/components/Card1/Card2";
import Card3 from "@/components/Card1/Card3";

export const metadata = {
  title: "VarMedical líder en Equipos Médicos y Reactivos para Laboratorio",
  description:
    "Var Medical es una empresa que provee equipo médico y reactivos para Laboratorios en Costa Rica.",
  alternates: {
    canonical: "https://varmedical.com/ ",
  },
  openGraph: {
    url: "https://varmedical.com/ ",
    title: "Var Medical | Equipos Médicos y Servicios de Mantenimiento",
    description:
      "Var Medical es una empresa que provee equipo médico y reactivos para Costa Rica.",
    images: [
      {
        url: "/image/var/equipos/bioteck.webp",
        width: 1200,
        height: 630,
        alt: "Var Medical Equipos Médicos",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="main-content">
        {/* Imagen con clase para estilos responsivos */}
        <Image
          src="/image/var/lab1.webp"
          alt="Var Medical Banner"
          width={1420}
          height={50}
          className="mt-20 border-2 border-gray-300 rounded-lg shadow-lg w-full h-auto mx-auto"
          priority={true} // Añade esta línea
        />

        {/* Pasamos la función de navegación al componente BetterBanner */}
        <BetterBanner
          flexdirection="row"
          bgmain="#ffffff"
          bgimage=""
          image="/image/var/productos.webp"
          title="Var Medical"
          text="Es una empresa que provee equipo médico y servicios de mantenimiento a diferentes sectores de la salud, de una manera responsable, competente y proactiva; capaz de abastecer las necesidades de una sociedad creciente incursionando como agente innovador en el ámbito de la salud costarricense."
          textbutton="Saber más"
          btColor="#04396f"
          fbtColor="white"
          hbtColor="#0575f8"
          bt2display="none"
          bt2Color="#2e0143"
          fb2tColor="white"
          textbutton2="Conozca Nuestro Menú"
          hbt2Color="#ece2df"
        />

        {/* Componente Banner1 */}
        <Banner1 h1="Línea de Equipos" color="transparent" fcolor="#04396f" />
        <Card1 />

        <BetterBannerImg
          flexdirection="row"
          bgmain="#d8d8db"
          bgimage=""
          image="/image/var/productos.webp"
          title="Servicio de Mantenimiento"
          text="Servicio de calidad y confianza, brindamos soluciones integradas para dar mantenimiento y asistencia a sus equipos."
          textbutton="Contacte con Nosotros"
          btColor="#04396f"
          fbtColor="white"
          hbtColor="#0575f8"
          bt2display="none"
          bt2Color="#2e0143"
          fb2tColor="white"
          textbutton2="Conozca Nuestro Menú"
          hbt2Color="#ece2df"
        />
        <Banner1 h1="Nuestras Marcas" color="transparent" fcolor="#04396f" />
        <Card3 />

        <Banner1 h1="Insumos para Laboratorio" color="transparent" fcolor="#04396f" />
        <Card2 />
      </div>
    </>
  );
}