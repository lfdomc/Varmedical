"use client"; // Este archivo ya es un componente del cliente
import { useRouter } from "next/navigation"; // Importamos useRouter aquí
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer"; // Importamos el componente YouTubePlayer

interface BannerProps {
  image: string;
  title: string;
  text: string;
  textbutton: string;
  btColor: string;
  hbtColor: string;
  fbtColor: string;
  bgmain: string;
  flexdirection: "row" | "column";
  btimage?: string;
  bgimage?: string;
  imonClick?: () => void;
  bt2display: "block" | "none";
  btimage2?: string;
  bt2Color: string;
  fb2tColor: string;
  textbutton2: string;
  hbt2Color: string;
}

const BetterBanner: React.FC<BannerProps> = ({
  
  title,
  text,
  textbutton,
  btColor,
  fbtColor,
  bgmain,
  hbtColor,
  flexdirection,
  
  bgimage = "",
  
  bt2display,
  bt2Color,
  fb2tColor,
  textbutton2,
  hbt2Color,
}) => {
  const router = useRouter(); // Usamos useRouter aquí

  const handleButtonClick = () => {
    router.push("/about"); // Navega a la página de inicio
  };

  return (
    <section
      className={`flex ${
        flexdirection === "row" ? "flex-row" : "flex-col-reverse"
      } flex-wrap w-full h-auto items-center justify-center bg-${bgmain} pt-10 pb-10 rounded-lg shadow-lg bg-no-repeat bg-cover`}
      style={{
        backgroundImage: bgimage ? `url(${bgimage})` : "none",
      }}
    >
      {/* Section A */}
      <div className="relative flex justify-center items-center w-full md:w-1/2">
        {/* Reemplazamos <img> con <Image> */}
        <YouTubePlayer videoId="suAZRYWSiVg" />
      </div>

      {/* Section B */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-dosis text-justify p-2">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-[90%] text-center mt-4">
          {title}
        </h1>
        <h2 className="text-lg sm:text-xl font-normal max-w-[80%] mt-4">
          {text}
        </h2>

        {/* Botón principal */}
        <button
          className={`flex items-center justify-center gap-4 min-w-[150px] bg-${btColor} text-${fbtColor} font-bold py-2 px-4 rounded-lg mt-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-${hbtColor}`}
          onClick={handleButtonClick}
        >
          {textbutton}
        </button>

        {/* Segundo botón */}
        <button
          className={`flex items-center justify-center gap-4 min-w-[150px] bg-${bt2Color} text-${fb2tColor} font-bold py-2 px-4 rounded-lg mt-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-${hbt2Color} ${
            bt2display === "block" ? "block" : "hidden"
          }`}
        >
          {textbutton2}
        </button>
      </div>
    </section>
  );
};

export default BetterBanner;