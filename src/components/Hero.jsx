import React from 'react';

/**
 * Componente de presentación principal (Hero Section).
 * Despliega un mensaje de identidad institucional en una distribución de dos columnas.
 * La columna izquierda administra las acciones de conversión principales y la descripción 
 * del grupo de trabajo, mientras que la columna derecha actúa como contenedor optimizado 
 * para la fotografía oficial del equipo corporativo.
 * * @component
 * @returns {React.ReactElement} Bloque de sección Hero con maquetación de rejilla responsiva.
 */
const Hero = () => {
  return (
    <section className="w-full px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center text-left">
      
      <div className="flex flex-col justify-center">
        <span className="text-panda-purple font-semibold text-sm tracking-wider uppercase mb-3">
          Nuestra Identidad
        </span>
        
        <h1 className="leading-[110%] tracking-tight my-0! text-brand-dark">
          Presentamos a nuestro <span className="text-panda-purple font-bold">Equipo</span>
        </h1>
        
        <p className="mt-6 text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
          Un sitio limpio, ordenado y visualmente atractivo diseñado específicamente para destacar la trayectoria, el talento y la imagen pública de nuestro grupo de trabajo.
        </p>
        
        <div className="mt-10 flex items-center gap-4">
          <button className="bg-panda-purple text-white font-bold text-sm px-8 py-3.5 rounded-2xl hover:bg-panda-purple/90 hover:scale-[1.02] transition-all duration-200 shadow-md shadow-panda-purple/20 cursor-pointer">
            Conocernos más
          </button>
          <button className="border border-brand-border text-brand-dark font-semibold text-sm px-6 py-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors duration-200 cursor-pointer">
            Ver proyectos
          </button>
        </div>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-square bg-gradient-to-tr from-panda-purple/10 to-transparent border border-brand-border rounded-[2.5rem] overflow-hidden relative shadow-sm group">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 bg-brand-bg rounded-2xl border border-brand-border flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
            👥
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Espacio para Fotografía del Grupo
          </p>
          <p className="text-[13px] text-gray-400 mt-1 max-w-xs">
            Se sugiere una imagen con fondo limpio o corporativo.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-panda-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

    </section>
  );
};

export default Hero;