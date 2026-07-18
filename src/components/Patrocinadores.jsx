import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} PatrocinadorProyecto
 * @property {string} id - Identificador único de la comisión o categoría asociada.
 * @property {string} titulo - Nombre oficial del proyecto financiado o respaldado.
 * @property {string} institucion - Entidad u organización que otorga el soporte.
 * @property {string} tipo - Clasificación jurídica o sectorial de la entidad (e.g., Empresa Privada).
 * @property {string} descripcion - Resumen del alcance y la vinculación técnica del proyecto.
 * @property {string} logo - Enlace al recurso de imagen corporativa de la institución.
 */

/**
 * Colección estática de proyectos respaldados por convenios y entidades patrocinadoras.
 * @type {PatrocinadorProyecto[]}
 */
const PATROCINADORES_DATA = [
  {
    id: "Ciencia y tecnología",
    titulo: "Incubadora de Negocios Tecnológicos e Innovación Sustentable",
    institucion: "Universidad Tecnológica de Nayarit",
    tipo: "Institución Educativa",
    descripcion: "Programa de vinculación académica para acelerar startups locales enfocadas en el desarrollo de software y agro-tecnología eficiente.",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop"
  },
  {
    id: "Enlace empresarial",
    titulo: "Modernización de Sistemas de Riego en la Costa Norte",
    institucion: "AgroIndustrias del Pacífico S.A.",
    tipo: "Empresa Privada",
    descripcion: "Financiamiento privado e infraestructura técnica para la implementación de compuertas automatizadas en Bahía de Banderas y San Blas.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop"
  },
  {
    id: "Proyectos sustentables y sostenibles",
    titulo: "Desarrollo de Eco-Infraestructura Serrana",
    institucion: "Colectivo Verde Nayarit",
    tipo: "Organización Civil",
    descripcion: "El Colectivo Verde Nayarit ha consolidado una alianza estratégica para llevar infraestructura básica limpia a las comunidades más vulnerables.",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop"
  }
];

/**
 * Componente de sección que despliega los proyectos institucionales de los patrocinadores.
 * Estructura las tarjetas en una cuadrícula responsiva (Grid) enlazando de manera dinámica
 * cada elemento hacia su ruta detallada mediante la codificación de componentes URI.
 * * @component
 * @returns {React.ReactElement} Bloque de sección con la rejilla de proyectos patrocinados.
 */
function Patrocinadores() {
  return (
    <section className="py-16 bg-brand-bg text-brand-text">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-panda-purple tracking-widest uppercase">NUESTRO RESPALDO</span>
          <h2 className="text-3xl font-black text-brand-dark mt-2">Proyectos de Patrocinadores</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PATROCINADORES_DATA.map((item) => (
            <div key={item.id} className="bg-zinc-900/20 border border-brand-border p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src={item.logo} alt={item.institucion} className="w-12 h-12 object-cover rounded-xl border border-brand-border bg-white" />
                  <div>
                    <h4 className="text-sm font-black text-brand-dark leading-tight">{item.titulo}</h4>
                    <p className="text-[11px] text-zinc-400 mt-1">{item.institucion} • {item.tipo}</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed mb-6">{item.descripcion}</p>
              </div>

              <div className="text-right">
                <Link 
                  to={`/proyectos-patrocinadores/${encodeURIComponent(item.id)}`} 
                  className="text-xs font-bold text-panda-purple hover:underline inline-flex items-center gap-1 cursor-pointer"
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

export default Patrocinadores;