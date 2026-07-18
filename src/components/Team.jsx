import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} PatrocinadorProyecto
 * @property {string} id - Identificador único que mapea directamente con las claves de la vista de artículos.
 * @property {string} titulo - Denominación oficial del proyecto respaldado.
 * @property {string} patrocinador - Entidad u organización que otorga el soporte.
 * @property {string} tipo - Tipo de entidad u organización gubernamental, académica o privada.
 * @property {string} logo - Recurso de imagen para el logotipo de la institución.
 * @property {string} resumen - Breve extracto descriptivo de la infraestructura u objetivo del proyecto.
 */

/**
 * Colección estática de proyectos y convenios vinculados a patrocinadores institucionales.
 * @type {PatrocinadorProyecto[]}
 */
const PROYECTOS_PATROCINADORES = [
  {
    id: "Ciencia y tecnología",
    titulo: "Incubadora de Negocios Tecnológicos e Innovación Sustentable",
    patrocinador: "Universidad Tecnológica de Nayarit",
    tipo: "Institución Educativa",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop",
    resumen: "Programa de vinculación académica para acelerar startups locales enfocadas en el desarrollo de software y agro-tecnología eficiente."
  },
  {
    id: "Enlace empresarial",
    titulo: "Modernización de Sistemas de Riego en la Costa Norte",
    patrocinador: "AgroIndustrias del Pacífico S.A.",
    tipo: "Empresa Privada",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    resumen: "Financiamiento privado e infraestructura técnica para la implementación de compuertas automatizadas en Bahía de Banderas y San Blas."
  },
  {
    id: "Proyectos sustentables y sostenibles",
    titulo: "Desarrollo de Eco-Infraestructura Serrana",
    patrocinador: "Colectivo Verde Nayarit",
    tipo: "Organización Civil",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop",
    resumen: "Alianza estratégica para llevar infraestructura básica limpia a las comunidades más vulnerables, optimizando el uso de energía solar y recursos hídricos."
  }
];

/**
 * Componente de sección para la visualización de proyectos corporativos (Team/Patrocinadores).
 * Presenta las tarjetas de soporte en una cuadrícula responsiva, utilizando codificación
 * de componentes URI segura para el enrutamiento dinámico basado en identificadores con caracteres especiales.
 * * @component
 * @returns {React.ReactElement} Bloque de sección con la rejilla de convenios de patrocinio.
 */
export default function Team() {
  return (
    <section className="bg-brand-bg py-16 transition-colors duration-300 border-t border-brand-border/40">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <span className="text-xs font-bold text-panda-purple uppercase tracking-widest">NUESTRO RESPALDO</span>
          <h2 className="text-3xl font-black text-brand-dark mt-1">Proyectos de Patrocinadores</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROYECTOS_PATROCINADORES.map((proyecto) => (
            <div 
              key={proyecto.id} 
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-brand-border/60 rounded-2xl p-6 flex flex-col justify-between hover:border-panda-purple/40 transition-all group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={proyecto.logo} 
                    alt={proyecto.patrocinador} 
                    className="w-12 h-12 rounded-xl object-cover border border-brand-border bg-white"
                  />
                  <div>
                    <h3 className="font-bold text-brand-dark text-base leading-snug group-hover:text-panda-purple transition-colors">
                      {proyecto.titulo}
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium">{proyecto.patrocinador} • {proyecto.tipo}</span>
                  </div>
                </div>
                <p className="text-xs text-brand-text/80 leading-relaxed mt-2 text-justify">
                  {proyecto.resumen}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/40 flex justify-end">
                <Link
                  to={`/proyectos-patrocinadores/${encodeURIComponent(proyecto.id)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-panda-purple hover:text-purple-700 dark:hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Ver proyecto completo →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}