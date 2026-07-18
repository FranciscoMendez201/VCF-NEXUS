import React from 'react';

/**
 * Componente de banner de bienvenida (Hero Section).
 * Presenta una imagen de fondo con capas de opacidad para asegurar la legibilidad 
 * del contenido institucional o informativo superpuesto.
 * @component
 * @returns {React.ReactElement} Bloque visual con imagen de fondo y gradiente de cobertura.
 */
const WelcomeBanner = () => {
  return (
    <section className="w-full relative h-[380px] md:h-[480px] bg-zinc-900 overflow-hidden flex items-center justify-center">
      
      {/* Capa de Imagen de Fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90 dark:opacity-80 transition-all duration-500"
        style={{ 
          backgroundImage: "url('https://visitnayarit.travel/wp-content/uploads/2023/07/Tepic-Portada.jpg')"
        }}
      />
      
      {/* Gradiente para Transición de Legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-[#121318] via-transparent to-black/20" />
      
      {/* Contenedor de Contenido (Placeholder) */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-8 text-center md:text-left z-10">
        {/* Aquí se puede inyectar el título y descripción del banner */}
      </div>

    </section>
  );
};

export default WelcomeBanner;