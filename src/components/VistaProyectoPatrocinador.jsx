import React from 'react';
import { useParams, Link } from 'react-router-dom';
import firma_ejemplo from '../assets/firma1.png';

/**
 * @typedef {Object} FirmaAutoridad
 * @property {string} nombre - Nombre completo del responsable del convenio.
 * @property {string} puesto - Cargo institucional del responsable.
 * @property {string} rubrica - Ruta o recurso del archivo de imagen de la firma.
 */

/**
 * @typedef {Object} ProyectoDetalle
 * @property {string} titulo - Nombre oficial del proyecto de respaldo.
 * @property {string} patrocinador - Entidad que respalda el proyecto.
 * @property {string} tipo - Clasificación de la entidad patrocinadora.
 * @property {string} logo - URL de la imagen del logotipo institucional.
 * @property {string[]} cuerpo - Párrafos que detallan el alcance del proyecto.
 * @property {FirmaAutoridad} firma - Datos de la autoridad que avala el documento.
 */

/**
 * Catálogo de información detallada de los proyectos institucionales.
 * @type {Object<string, ProyectoDetalle>}
 */
const PROYECTOS_PATROCINADORES = {
  "Ciencia y tecnología": {
    titulo: "Incubadora de Negocios Tecnológicos e Innovación Sustentable",
    patrocinador: "Universidad Tecnológica de Nayarit",
    tipo: "Institución Educativa",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop",
    cuerpo: [
      "La Universidad Tecnológica de Nayarit, en su compromiso continuo con la profesionalización y el desarrollo regional, ha puesto en marcha la nueva Incubadora de Negocios Tecnológicos.",
      "Este espacio busca dotar a los jóvenes emprendedores de las herramientas técnicas, asesoría legal y mentoría empresarial necesarias para consolidar proyectos de alto impacto.",
      "A través de alianzas estratégicas con la iniciativa privada y colectivos como Voces del Futuro, abrimos canales de financiamiento y desarrollo tecnológico."
    ],
    firma: {
      nombre: "Mtro. Gerardo Ávila Espinoza",
      puesto: "Director de Vinculación Universitaria",
      rubrica: firma_ejemplo
    }
  },
  "Enlace empresarial": {
    titulo: "Modernización de Sistemas de Riego en la Costa Norte",
    patrocinador: "AgroIndustrias del Pacífico S.A.",
    tipo: "Empresa Privada",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    cuerpo: [
      "Como empresa socialmente responsable y firmes creyentes en el desarrollo sostenible, AgroIndustrias del Pacífico ha destinado un fondo especial para mitigar el impacto hídrico en el campo nayarita.",
      "Este proyecto introduce sistemas avanzados de compuertas automatizadas controladas de manera remota, optimizando el canal de distribución de agua dulce.",
      "Es hora de que sumemos esfuerzos entre empresarios, técnicos y la sociedad civil para garantizar la soberanía alimentaria."
    ],
    firma: {
      nombre: "Ing. Carlos Mendoza Alatorre",
      puesto: "Director General de Operaciones",
      rubrica: firma_ejemplo
    }
  },
  "Proyectos sustentables y sostenibles": {
    titulo: "Desarrollo de Eco-Infraestructura Serrana",
    patrocinador: "Colectivo Verde Nayarit",
    tipo: "Organización Civil",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop",
    cuerpo: [
      "El Colectivo Verde Nayarit ha consolidado una alianza estratégica para llevar infraestructura básica limpia a las comunidades más vulnerables geográficamente.",
      "A través de celdas solares modulares y la construcción de cisternas comunitarias con filtrado avanzado, este proyecto soluciona de raíz los cortes de servicios críticos.",
      "El respaldo a estas dinámicas es crucial para acortar la brecha de desigualdad social, construyendo autonomía habitacional."
    ],
    firma: {
      nombre: "Sofía Ruiz Mendiola",
      puesto: "Coordinadora de Proyectos Sustentables",
      rubrica: firma_ejemplo
    }
  }
};

/**
 * Vista de detalle dinámico para proyectos específicos de patrocinadores.
 * Permite el renderizado de información técnica, alcance del proyecto y validación
 * institucional mediante la firma de la autoridad correspondiente.
 * @component
 * @returns {React.ReactElement} Interfaz de visualización de detalle de convenio.
 */
function VistaProyectoPatrocinador() {
  const { id } = useParams();
  const idDecodificado = id ? decodeURIComponent(id) : "";
  const proyecto = PROYECTOS_PATROCINADORES[idDecodificado];

  if (!proyecto) {
    return (
      <div className="text-center py-24 bg-brand-bg min-h-screen transition-colors duration-300">
        <h2 className="text-xl font-bold text-brand-dark">Proyecto no encontrado</h2>
        <Link to="/" className="text-panda-purple mt-4 inline-block font-bold hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-5xl mx-auto px-6 py-12 bg-brand-bg transition-colors duration-300">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-panda-purple mb-8 group cursor-pointer">
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver al inicio
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start border-b border-brand-border pb-12">
        <div className="lg:col-span-2 space-y-6">
          <span className="text-[10px] font-bold text-panda-purple tracking-widest uppercase bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded border border-purple-100 dark:border-purple-900/30">
            PROYECTO DE RESPALDO CONJUNTO
          </span>
          
          <h1 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight leading-tight mt-2">
            {proyecto.titulo}
          </h1>
          
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">
            Socio Estratégico: {proyecto.patrocinador}
          </p>

          <div className="space-y-6 text-base md:text-lg text-brand-text/90 dark:text-zinc-300 leading-relaxed font-normal pt-4 text-justify">
            {proyecto.cuerpo.map((parrafo, idx) => (
              <p key={idx}>{parrafo}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/30 border border-brand-border/60 p-8 rounded-2xl lg:sticky lg:top-24">
          <img 
            src={proyecto.logo} 
            alt={proyecto.patrocinador} 
            className="w-40 h-40 object-cover rounded-xl border border-brand-border shadow-xs mb-4 bg-white"
          />
          <h3 className="text-sm font-bold text-brand-dark text-center">{proyecto.patrocinador}</h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{proyecto.tipo}</span>
        </div>
      </div>

      <div className="mt-12 max-w-sm text-left">
        <div className="h-20 flex items-end pl-2 mb-2 select-none tracking-widest">
          <img 
            src={proyecto.firma.rubrica} 
            alt={`Firma de ${proyecto.firma.nombre}`} 
            className="h-full w-auto object-contain max-w-[180px] mix-blend-multiply dark:invert opacity-85"
          />
        </div>
        <div className="border-t border-zinc-300 dark:border-zinc-700 pt-3">
          <p className="text-sm font-bold text-brand-dark">{proyecto.firma.nombre}</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mt-0.5">{proyecto.firma.puesto}</p>
        </div>
      </div>
    </main>
  );
}

export default VistaProyectoPatrocinador;