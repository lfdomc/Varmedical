import React from 'react';
import Image from 'next/image';

// Definición del tipo para las props
type ImageProps = {
    src: string; // URL de la imagen (obligatoria)
    alt?: string; // Texto alternativo (opcional)
    width?: number; // Ancho de la imagen (opcional)
    height?: number; // Altura de la imagen (opcional)
    priority?: boolean; // Prioridad de carga (opcional)
};

export const ImageNext = (props: ImageProps) => {
    const { src, alt = '', width = 82, height = 82, priority = false } = props;

    return (
        <div>
            <Image
                src={src} // URL de la imagen
                alt={alt} // Texto alternativo con valor por defecto vacío
                width={width} // Ancho con valor por defecto de 82
                height={height} // Altura con valor por defecto de 82
                priority={priority} // Prioridad de carga con valor por defecto false
            />
        </div>
    );
};