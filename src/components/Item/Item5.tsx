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
      title: "Prolyte",
      description:
        "• Pantalla táctil, Teclado externo, Acceso remoto\n• Conectividad Lan, Wifi\n• Almacenamiento de Datos 20,000+ Resultados de Pacientes20,000+ \n• Resultados de Control\n• Tiempo de Análisis 45 Segundos (240 por hora)\n• 3 parámetros en forma simultanea, \n• 4 en total, Na+ K+ Cl- Li+",
      imageUrl: "/image/var/equipos/prolite.webp", // Imagen de ejemplo
      pdfUrl: "/image/var/equipos/inmuno/Prolyte_ES.pdf", // Ruta del PDF de ejemplo
      youtubeVideoId: "BGrp4F3sf20", // Ejemplo de ID de video de YouTube
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Encabezado destacado */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 border-b-4 border-blue-500 inline-block">
          Equipos de Electrolitos
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
              {equipment.youtubeVideoId ? (
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${equipment.youtubeVideoId}`}
                  title={`${equipment.title} - Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              ) : (
                <p className="text-gray-500 italic"></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalEquipmentList;