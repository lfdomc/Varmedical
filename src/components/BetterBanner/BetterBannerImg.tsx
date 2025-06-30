"use client"; // Este archivo ya es un componente del cliente
import styled from "styled-components";
import { useRouter } from "next/navigation"; // Importamos useRouter aquí
import Image from "next/image"; // Importamos Image de Next.js

const MainSection = styled.section<{
  $bgmain: string;
  $flexdirection: string;
  $bgimage: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexdirection};
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.$bgmain};
  align-items: center;
  justify-content: center;
  background-image: ${(props) => (props.$bgimage ? `url(${props.$bgimage})` : "none")};
  padding-top: 2rem;

  /* Agregamos los estilos equivalentes a pb-20, rounded-lg, shadow-lg */
  padding-bottom: 2rem; /* Equivalente a pb-20 */
  border-radius: 0.5rem; /* Equivalente a rounded-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Equivalente a shadow-lg */

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 10px;
  }
`;

const SectionA = styled.section<{ $imgflexdirection?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 2px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SectionB = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  text-align: justify;
  padding: 3px 10px;

  h1 {
    font-size: clamp(2rem, 3vw, 3.5rem); /* Ajuste para mejorar legibilidad */
    font-weight: 600;
    max-width: 90%;
    text-align: center;
  }

  h2 {
    font-size: clamp(1rem, 1.5vw, 1.5rem); /* Ajuste para mejorar legibilidad */
    font-weight: 400;
    max-width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px;

    h1 {
      font-size: clamp(1.5rem, 3vw, 2.5rem); /* Tamaño más grande en móviles */
    }

    h2 {
      font-size: clamp(1rem, 1.5vw, 1.5rem); /* Tamaño más grande en móviles */
    }
  }
`;

const Button = styled.button<{
  $btColor: string;
  $fbtColor: string;
  $hbtColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 150px;
  background-color: ${(props) => props.$btColor};
  color: ${(props) => props.$fbtColor};
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
    background-color: ${(props) => props.$hbtColor};
  }

  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: clamp(1rem, 2vw, 1.5rem); /* Ajuste para botones en móviles */
  }
`;

const Button2 = styled(Button)<{ $bt2display: string }>`
  display: ${(props) => props.$bt2display};
`;

interface BannerProps {
  image: string;
  title: string;
  text: string;
  textbutton: string;
  btColor: string;
  hbtColor: string;
  fbtColor: string;
  bgmain: string;
  flexdirection: string;
  btimage?: string;
  bgimage?: string;
  imonClick?: () => void;
  bt2display: string;
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
  const router = useRouter(); // Usamos useRouter aquí

  const handleButtonClick = () => {
    router.push("/contact"); // Navega a la página de inicio
  };

  return (
    <MainSection $bgmain={bgmain} $flexdirection={flexdirection} $bgimage={bgimage}>
      <SectionA>
        {/* Usamos el componente Image de Next.js */}
        <Image
          src={image}
          alt="Imagen"
          width={600} // Define el ancho deseado
          height={400} // Define la altura deseada
          style={{ borderRadius: "60px" }}
          onClick={imonClick}
        />
      </SectionA>
      <SectionB>
        <h1>{title}</h1>
        <h2>{text}</h2>
        <Button
          $btColor={btColor}
          $hbtColor={hbtColor}
          $fbtColor={fbtColor}
          onClick={handleButtonClick} // Lógica de navegación aquí
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
        </Button>

        <Button2
          $btColor={bt2Color}
          $hbtColor={hbt2Color}
          $fbtColor={fb2tColor}
          $bt2display={bt2display}
        >
          {btimage && (
            <Image
              src={btimage}
              alt="boton"
              width={50}
              height={50}
            />
          )}
          {textbutton2}
        </Button2>
      </SectionB>
    </MainSection>
  );
};

export default BetterBanner;