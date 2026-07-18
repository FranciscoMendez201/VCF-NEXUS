import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Slide
 * @property {number} id - Identificador único de la diapositiva.
 * @property {string} image - URL o ruta de la imagen del banner panorámico.
 * @property {string} alt - Texto alternativo descriptivo para accesibilidad (SEO/A11y).
 */

/**
 * Colección estática de diapositivas utilizadas para poblar el carrusel principal.
 * @type {Slide[]}
 */
const SLIDES = [
  {
    id: 1,
    image: 'https://visitnayarit.travel/wp-content/uploads/2023/07/Tepic-Portada.jpg?auto=format&fit=crop&w=1200&q=80',
    alt: 'Banner Fotografía área capital Nayarit VCF',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Banner Evento Universitario VCF',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Conferencia Voces del Futuro',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Inscripciones abiertas talleres de legislación',
  }
];

/**
 * Componente de visualización multimedia en formato carrusel panorámico (Slider).
 * Controla ciclos de transición automática de imágenes temporizados, estados de
 * reproducción de manera interactiva (play/pausa) y controles de paginación manuales.
 * * @component
 * @returns {React.ReactElement} Despliegue de banner responsivo con controles de flujo.
 */
export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 my-6">
      
      <div className="relative w-full aspect-[21/7] sm:aspect-[21/6] md:aspect-[21/5.5] overflow-hidden rounded-lg bg-black shadow-md group border border-slate-100">
        
        <div className="relative w-full h-full">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/80 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white focus:outline-none"
          aria-label="Anterior banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/80 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white focus:outline-none"
          aria-label="Siguiente banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 mt-3 py-2 border-b border-slate-100">
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
          aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM17.25 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-2.5 bg-black' 
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300' 
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}