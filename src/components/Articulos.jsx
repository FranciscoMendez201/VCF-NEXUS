import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} ArticuloPreview
 * @property {string} id - Identificador alfanumérico único del artículo académico.
 * @property {string} titulo - Título descriptivo principal de la investigación.
 * @property {string} autores - Investigadores y colaboradores responsables del proyecto.
 * @property {string} fecha - Periodo o mes de publicación oficial del artículo.
 * @property {string} revista - Publicación o diario indexado científico de alojamiento.
 * @property {string} resumen - Breve extracto o abstract del impacto técnico del proyecto.
 * @property {string} enlace - Atributo de referencia (remanente de arquitectura estática).
 */

/**
 * Estructura de almacenamiento indexada por categorías de investigación (Áreas Científicas).
 * @type {Object.<string, ArticuloPreview[]>}
 */
const AREAS_CIENTIFICAS = {
  "Biotecnología y Agricultura": [
    {
      id: "bio-1",
      titulo: "Optimización del cultivo de mango en Nayarit mediante sensores IoT",
      autores: "Dr. Roberto Silva, Ing. Beatriz Haro",
      fecha: "Mayo 2026",
      revista: "Revista de Agro-Tecnología Regional (Vol. 12)",
      resumen: "Este estudio evalúa la implementación de redes de sensores inalámbricos para monitorear la humedad del suelo y el estrés hídrico en las plantaciones de mango de la región costera del estado, logrando una reducción del 25% en el consumo de agua dulce.",
      enlace: "#"
    },
    {
      id: "bio-2",
      titulo: "Impacto del cambio climático en la producción acuícola de San Blas",
      autores: "Dra. Elena Ramos, M. en C. Ricardo Ortiz",
      fecha: "Marzo 2026",
      revista: "Nayarit Science Quarterly",
      resumen: "Análisis exhaustivo sobre las variaciones de temperatura en los esteros locales y su correlación directa con la tasa de crecimiento del camarón blanco, proponiendo sistemas de control biológico adaptativo.",
      enlace: "#"
    }
  ],
  "Energías Renovables": [
    {
      id: "ener-1",
      titulo: "Potencial de generación híbrida (Solar-Eólica) en la zona serrana",
      autores: "Ing. Carlos Gómez, Dr. Alejandro Méndez",
      fecha: "Enero 2026",
      revista: "Journal of Renewable Energy Mexico",
      resumen: "Modelado matemático y simulación de microredes eléctricas comunitarias aisladas para proveer energía ininterrumpida a comunidades de difícil acceso geográfico en el estado.",
      enlace: "#"
    }
  ],
  "Tecnologías de la Información": [
    {
      id: "tic-1",
      titulo: "Algoritmos de visión artificial para la detección de plagas en tiempo real",
      autores: "Ing. Beatriz Haro, Dr. Roberto Silva",
      fecha: "Junio 2026",
      revista: "Iberoamerican Journal of Computer Science",
      resumen: "Desarrollo de un modelo ligero basado en redes neuronales convolucionales (CNN) capaz de ejecutarse en dispositivos móviles locales para identificar la mosca de la fruta en huertos locales.",
      enlace: "#"
    }
  ]
};

/**
 * Componente de catálogo y segmentación de artículos científicos.
 * Administra el estado de filtrado por áreas de investigación mediante un
 * panel lateral responsivo y expone previsualizaciones dinámicas enlazadas
 * al enrutador principal de la aplicación.
 * * @component
 * @returns {React.ReactElement} Vista de catálogo segmentado con controles de estado.
 */
export default function Articulos() {
  const categorias = Object.keys(AREAS_CIENTIFICAS);
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);
  const articulosFiltrados = AREAS_CIENTIFICAS[categoriaActiva];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 transition-colors duration-300">
      
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-panda-purple font-bold text-xs uppercase tracking-widest block">
          Divulgación Científica
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-2 tracking-tight">
          Artículos e <span className="text-panda-purple">Investigaciones</span>
        </h2>
        <p className="text-brand-text/80 mt-3 max-w-xl text-center text-sm leading-relaxed">
          Explora los estudios técnicos, científicos y de innovación tecnológica desarrollados para impulsar el estado.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        <aside className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:border-r border-brand-border md:pr-4 sticky top-24 z-10 bg-white dark:bg-zinc-950 md:bg-transparent">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-3 rounded-xl font-bold text-xs md:text-sm tracking-wide text-left cursor-pointer whitespace-nowrap transition-all duration-200 w-auto md:w-full ${
                categoriaActiva === cat
                  ? 'bg-panda-purple text-white shadow-sm scale-[1.02]'
                  : 'bg-zinc-50 dark:bg-zinc-900/50 text-brand-text hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-brand-border md:border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        <section className="flex-1 w-full space-y-6">
          {articulosFiltrados.map((art) => (
            <article 
              key={art.id} 
              className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-brand-border shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
                  <span>{art.revista}</span>
                  <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                  <span>{art.fecha}</span>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-brand-dark tracking-tight leading-snug group-hover:text-panda-purple transition-colors duration-200">
                  {art.titulo}
                </h3>

                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                  Por: {art.autores}
                </p>

                <p className="text-sm text-brand-text/80 mt-4 leading-relaxed line-clamp-4">
                  {art.resumen}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex justify-end">
                <Link
                  to={`/articulos/${art.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-panda-purple hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Leer artículo completo 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}