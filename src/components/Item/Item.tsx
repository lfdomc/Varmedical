import React from "react";

// Definición del tipo para los datos de los equipos médicos
interface MedicalEquipment {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  youtubeVideoId: string; // Nuevo campo para el ID del video de YouTube
}

// Componente principal
const MedicalEquipmentList: React.FC = () => {
  // Array de ejemplo con datos de equipos médicos
  const medicalEquipments: MedicalEquipment[] = [
    {
      id: 1,
      title: "FOTÓMETRO SPINLAB S",
      description:
        "• Analizador semiautomático para Química clínica.\n• Bajo volumen de reactivo.\n• Impresora integrada.\n• Alta fiabilidad y bajo mantenimiento.",
      imageUrl: "/image/var/equipos/QFR.webp", // Imagen de ejemplo
      pdfUrl: "/image/var/PDF/spinlab-s.pdf", // Ruta del PDF de ejemplo
      youtubeVideoId: "BVYcwVPKGf4", // Ejemplo de ID de video de YouTube
    },
    {
      id: 2,
      title: "SPIN XS",
      description:
        "• Completamente automático 200 test por hora\n• Tamaño reducido\n•  Estación de lavado\n•  Línea dedicada de reactivos",
      imageUrl: "/image/var/equipos/SpinXS.webp", // Imagen de ejemplo
      pdfUrl: "/image/var/PDF/SpinXS.pdf", // Ruta del PDF de ejemplo
      youtubeVideoId: "4xQIcTKj_c0", // Ejemplo de ID de video de YouTube
    },
    {
      id: 3,
      title: "SPIN 200E",
      description:
        "• Velocidad: 200pruebas/hora, 330 pruebas/hora  con electrolitos.\n• Estación de lavado en 8 pasos con precalentamiento de detergente y agua.\n• Sistema óptico con 12 longitudes de onda.\n• Sistema completamente abierto con perfiles definidos por el usuario.\n• 40 posiciones de muestra, 40 posiciones de reactivo.\n• Compartimento refrigerado a 2-12 ºC para muestra y reactivo.\n• Conexión bi-directional al SIL.",
      imageUrl: "/image/var/equipos/spin200.webp", // Imagen de ejemplo
      pdfUrl: "/image/var/PDF/Spin200.pdf", // Ruta del PDF de ejemplo
      youtubeVideoId: "5ja-GW7cOyU", // Ejemplo de ID de video de YouTube
    },
    {
      id: 4,
      title: "SPIN 640 plus",
      description:
        "• 400 pruebas/hora, hasta 640 pruebas hora con módulo ISE\n• Compartimento refrigerado para reactivos\n• Capacidad de carga para 90 muestras\n• Lector de código de barras interno (opcional)",
      imageUrl: "/image/var/equipos/spin640plus.webp", // Imagen de ejemplo
      pdfUrl: "/image/var/PDF/Spin640.pdf", // Ruta del PDF de ejemplo
      youtubeVideoId: "c1O-lvTgptE", // Ejemplo de ID de video de YouTube
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Encabezado destacado */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 border-b-4 border-blue-500 inline-block">
          Equipos de Química Clínica
        </h1>
        <p className="text-gray-600">Conoce nuestros equipos médicos innovadores.</p>
      </header>

      {/* Lista de equipos médicos */}
      <div className="flex flex-col items-center justify-center">
        {medicalEquipments.map((equipment) => (
          <div
            key={equipment.id}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mb-8 w-full max-w-6xl mx-auto"
          >
            {/* Imagen a la izquierda */}
            <div className="md:w-1/3 flex justify-center items-center p-4 hover:scale-112 transition-transform duration-300">
              <img
                src={equipment.imageUrl}
                alt={equipment.title}
                className="w-full h-auto object-contain max-w-6xl"
              />
            </div>

            {/* Información a la derecha */}
            <div className="md:w-1/3 p-6 text-center md:text-left">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {equipment.title}
              </h2>
              <div className="text-gray-700 mb-6 space-y-2">
                {/* Dividir la descripción por saltos de línea y renderizar cada línea */}
                {equipment.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <a
                href={equipment.pdfUrl}
                download
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Descargar Ficha Técnica
              </a>
            </div>

            {/* Video de YouTube a la derecha */}
            <div className="md:w-1/3 p-4 flex justify-center items-center">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${equipment.youtubeVideoId}`}
                title={`${equipment.title} - Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalEquipmentList;