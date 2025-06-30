// components/YouTubePlayer.jsx

interface YouTubePlayerProps {
  videoId: string; // Definimos explícitamente que videoId es de tipo string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  // Validación del videoId
  const isValidVideoId = (id: string): boolean => {
    const regex = /^[a-zA-Z0-9_-]+$/; // Solo permite letras, números, guiones y guiones bajos
    return regex.test(id);
  };

  if (!videoId || !isValidVideoId(videoId)) {
    return <div>Error: Por favor, proporciona un ID de video válido.</div>;
  }

  // Construcción de la URL con parámetros adicionales
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&controls=0`;

  return (
    <div style={{  borderRadius:"600px", maxWidth: '100%', margin: 'auto', position: 'relative', width: '85%',height: '60%', paddingTop: '56.25%' }}>
      {/* El paddingTop de 56.25% mantiene una relación de aspecto de 16:9 */}
      <iframe
        src={embedUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          objectFit: 'cover', // Recorta el video para que llene el contenedor
        }}
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;