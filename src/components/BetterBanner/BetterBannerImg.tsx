"use client"; // Este archivo ya es un componente del cliente
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BannerProps {
  image: string;
  title: string;
  text: string;
  textbutton: string;
  btColor: string;
  hbtColor: string;
  fbtColor: string;
  bgmain: string;
  flexdirection: "row" | "column" | "row-reverse" | "column-reverse";
  btimage?: string;
  bgimage?: string;
  imonClick?: () => void;
  bt2display: "flex" | "none";
  btimage2?: string;
  bt2Color: string;
  fb2tColor: string;
  textbutton2: string;
  hbt2Color: string;
}

const BetterBanner: React.FC<BannerProps> = ({
  image,
  title,
  text,
  textbutton,
  btColor,
  fbtColor,
  bgmain,
  hbtColor,
  flexdirection,
  btimage = "",
  bgimage = "",
  imonClick,
  bt2display,
  bt2Color,
  fb2tColor,
  textbutton2,
  hbt2Color,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <section
      className={`flex ${flexdirection} flex-wrap w-full items-center justify-center rounded-lg shadow-lg py-8 px-4 bg-no-repeat bg-cover`}
      style={{
        backgroundColor: bgmain,
        backgroundImage: bgimage ? `url(${bgimage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section A - Imagen */}
      <div className="relative w-80 md:w-1/2 flex items-center justify-center">
        <Image
          src={image}
          alt="Imagen"
          width={600}
          height={400}
          className="rounded-[60px] cursor-pointer"
          onClick={imonClick}
        />
      </div>

      {/* Section B - Contenido */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-dosis px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-[90%] mx-auto mb-4 mt-4">
          {title}
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-normal max-w-[80%] mx-auto mb-4">
          {text}
        </h2>

        {/* Botón Principal */}
        <button
          className={`flex items-center justify-center gap-2 w-40 sm:w-56 py-3 px-6 rounded-lg text-${fbtColor} bg-${btColor} hover:bg-${hbtColor} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg`}
          style={{
            color: fbtColor,
            backgroundColor: btColor,
          }}
          onClick={handleButtonClick}
        >
          {btimage && (
            <Image
              src={btimage}
              alt="boton"
              width={50}
              height={50}
            />
          )}
          {textbutton}
        </button>

        {/* Botón Secundario */}
        <button
          className={`flex items-center justify-center gap-2 w-40 sm:w-56 py-3 px-6 mt-4 rounded-lg text-${fb2tColor} bg-${bt2Color} hover:bg-${hbt2Color} transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg ${
            bt2display === "none" ? "hidden" : ""
          }`}
          style={{
            color: fb2tColor,
            backgroundColor: bt2Color,
          }}
        >
          {textbutton2}
        </button>
      </div>
    </section>
  );
};

export default BetterBanner;