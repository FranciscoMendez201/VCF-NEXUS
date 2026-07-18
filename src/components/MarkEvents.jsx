import React from 'react';

/**
 * @typedef {Object} EventoCard
 * @property {number} id - Identificador único interno del evento.
 * @property {string} titulo - Nombre oficial o descriptivo del evento o foro técnico.
 * @property {string} tag - Etiqueta de clasificación categórica (e.g., Innovación, Capacitación).
 * @property {string} fecha - Mes y año en el que se llevó a cabo la actividad.
 * @property {string} imgPlaceholder - Cadena de texto provisional que actúa como indicador de recursos visuales.
 */

/**
 * Colección estática de bitácoras y registros de actividades del grupo.
 * @type {EventoCard[]}
 */
const EVENTOS_DATA = [
  {
    id: 1,
    titulo: "Conferencia Tecnológica 2026",
    tag: "Innovación",
    fecha: "Mayo 2026",
    imgPlaceholder: "📸 Foto Evento 1"
  },
  {
    id: 2,
    titulo: "Taller de Ciberseguridad y Redes",
    tag: "Capacitación",
    fecha: "Abril 2026",
    imgPlaceholder: "📸 Foto Evento 2"
  },
  {
    id: 3,
    titulo: "Mesa de Trabajo: Legislación Digital",
    tag: "Gobierno",
    fecha: "Marzo 2026",
    imgPlaceholder: "📸 Foto Evento 3"
  },
  {
    id: 4,
    titulo: "Presentación de Proyectos Nayarit",
    tag: "Comunidad",
    fecha: "Febrero 2026",
    imgPlaceholder: "📸 Foto Evento 4"
  },
  {
    id: 5,
    titulo: "Foro de Infraestructura SharePoint",
    tag: "Sistemas",
    fecha: "Enero 2026",
    imgPlaceholder: "📸 Foto Evento 5"
  }
];

/**
 * Componente de galería infinita automatizada (Marquee).
 * Duplica la colección de datos en memoria para estructurar un bucle continuo
 * y fluido mediante animaciones CSS basadas en traslación horizontal, soportando
 * comportamientos interactivos como la pausa en el evento de puntero (hover).
 * * @component
 * @returns {React.ReactElement} Bloque de visualización dinámica en carrusel continuo.
 */
const MarkEvents = () => {
  const listaDuplicada = [...EVENTOS_DATA, ...EVENTOS_DATA, ...EVENTOS_DATA];

  return (
    <section className="w-full py-28 md:py-32 bg-brand-bg border-b border-brand-border overflow-hidden transition-colors duration-300">
      
      <div className="max-w-3xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-panda-purple block mb-3">
            NUESTRA TRAYECTORIA
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight balance">
            Galería de Eventos y Actividades
        </h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        
        <div className="flex gap-6 shrink-0 animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer py-4">
          {listaDuplicada.map((evento, index) => (
            <div 
              key={`${evento.id}-${index}`}
              className="w-72 sm:w-80 shrink-0 bg-zinc-50 dark:bg-zinc-900/40 border border-brand-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-panda-purple/40 transition-all duration-300 group"
            >
              <div className="h-44 w-full bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center justify-center relative overflow-hidden text-zinc-400 dark:text-zinc-600 font-medium text-sm">
                <span>{evento.imgPlaceholder}</span>
                <span className="absolute bottom-3 left-3 bg-brand-bg/90 backdrop-blur-xs text-brand-dark text-xxs font-bold px-2.5 py-1 rounded-lg border border-brand-border">
                  {evento.tag}
                </span>
              </div>

              <div className="p-5">
                <span className="text-xxs font-semibold text-panda-gray uppercase tracking-wider block mb-1">
                  {evento.fecha}
                </span>
                <h3 className="text-sm font-bold text-brand-dark group-hover:text-panda-purple transition-colors line-clamp-1">
                  {evento.titulo}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xxs font-bold text-panda-purple">
                  <span>Ver registro fotográfico</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarkEvents;