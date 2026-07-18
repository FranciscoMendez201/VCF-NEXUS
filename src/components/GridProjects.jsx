import React from 'react';

/**
 * @typedef {Object} ProyectoCard
 * @property {number} id - Identificador único de la tarjeta de proyecto.
 * @property {string} icono - Carácter emoji representativo de la disciplina técnica.
 * @property {string} titulo - Nombre comercial o técnico del desarrollo o auditoría.
 * @property {string} descripcion - Resumen del alcance técnico o infraestructura del proyecto.
 * @property {string} textoBoton - Etiqueta textual para el botón de acción (Call to Action).
 */

/**
 * Colección estática de proyectos, implementaciones de infraestructura y auditorías de TI.
 * @type {ProyectoCard[]}
 */
const PROYECTOS_DATA = [
  {
    id: 1,
    icono: "🎫",
    titulo: "Sistema de Tickets IT",
    descripcion: "Aplicación web profesional desarrollada en Angular para la gestión centralizada e inteligente de incidencias técnicas.",
    textoBoton: "Ver Repositorio"
  },
  {
    id: 2,
    icono: "🛡️",
    titulo: "Infraestructura & NAS",
    descripcion: "Implementación de servidores de almacenamiento Synology y videovigilancia perimetral sobre hardware Ubiquiti UniFi.",
    textoBoton: "Ver Arquitectura"
  },
  {
    id: 3,
    icono: "📊",
    titulo: "Manuales SharePoint",
    descripcion: "Documentación y manuales de usuario para la gobernanza, seguridad y arquitectura documental en entornos corporativos.",
    textoBoton: "Leer Manuales"
  },
  {
    id: 4,
    icono: "🪵",
    titulo: "E-Commerce Woodwork",
    descripcion: "Plataforma optimizada y estrategia de automatización para la comercialización masiva de mobiliario en redes sociales.",
    textoBoton: "Ver Proyecto"
  },
  {
    id: 5,
    icono: "🔒",
    titulo: "Auditoría Passphrases",
    descripcion: "Estudio dinámico de seguridad basado en estándares NIST e Hive Systems para la mitigación de ataques por fuerza bruta.",
    textoBoton: "Ver Presentación"
  },
  {
    id: 6,
    icono: "⚡",
    titulo: "Redes Cisco & Meraki",
    descripcion: "Configuración, optimización de enrutamiento y despliegue de access points para alta densidad de usuarios.",
    textoBoton: "Ver Topología"
  },
  {
    id: 7,
    icono: "🎬",
    titulo: "Automatización Fliki",
    descripcion: "Pipeline automatizado de creación y renderizado de contenido multimedia educativo mediante inteligencia artificial.",
    textoBoton: "Ver Canales"
  },
  {
    id: 8,
    icono: "📋",
    titulo: "Estándares SEER",
    descripcion: "Filtros de especificación técnica y eficiencia energética para la integración de sistemas de climatización controlados.",
    textoBoton: "Ver Parámetros"
  }
];

/**
 * Componente de sección que renderiza una rejilla interactiva de proyectos.
 * Despliega tarjetas parametrizadas en una distribución flexible (Grid) adaptativa
 * que integra animaciones de escala y transiciones de color de acuerdo al tema del sistema.
 * * @component
 * @returns {React.ReactElement} Bloque de sección con rejilla responsiva de proyectos.
 */
const GridProjects = () => {
  return (
    <section id="proyectos" className="w-full py-28 md:py-32 dark:bg-zinc-900/20 border-b border-brand-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="leading-[110%] tracking-tight my-0! text-brand-dark">
            Ecosistema de Proyectos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROYECTOS_DATA.map((proyecto) => (
            <div 
              key={proyecto.id}
              className="bg-brand-bg border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 text-center shadow-xs hover:shadow-xl hover:border-panda-purple/50 dark:hover:border-panda-purple/40 transition-all duration-300 flex flex-col justify-between items-center group"
            >
              <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-2xl mb-4 text-panda-purple transition-transform group-hover:scale-110 duration-300">
                {proyecto.icono}
              </div>

              <div className="flex-1 flex flex-col justify-start mb-6">
                <h3 className="text-base font-bold text-brand-dark tracking-tight mb-2 group-hover:text-panda-purple transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-4">
                  {proyecto.descripcion}
                </p>
              </div>

              <button className="w-full py-2 px-4 bg-transparent border border-panda-purple text-panda-purple text-xxs font-bold uppercase tracking-wider rounded-lg hover:bg-panda-purple hover:text-white active:scale-[0.98] transition-all cursor-pointer">
                {proyecto.textoBoton}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GridProjects;