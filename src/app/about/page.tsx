import BetterBannerImg from "@/components/BetterBanner/BetterBannerImg";


export default function About() {
  return (
    <div className="main-content">
      <BetterBannerImg
          flexdirection="row-reverse"
          bgmain="#d8d8db"
          bgimage=""
          image="/image/var/Laboratorio.jpg"
          title="Servicio y Calidad"
          text="Contamos con un equipo de profesionales con amplia experiencia en el mercado de equipos, insumos y reactivos médicos."
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
    </div>
  );
}