import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fotoFrancisco from '../assets/perfil.jpg';

/**
 * URL del recurso de imagen para la Presidencia Estatal.
 * @type {string}
 */
const FOTO_PRESIDENTE_ESTATAL = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face";

/**
 * @typedef {Object} MiembroEstructura
 * @property {number|string} [id] - Identificador único opcional del miembro técnico.
 * @property {string} nombre - Nombre y apellido del colaborador.
 * @property {string} cargo - Rol o puesto asignado dentro del colectivo.
 * @property {string} foto - Enlace o recurso estático de la imagen de perfil.
 */

/**
 * @typedef {Object} ColectivoEstructura
 * @property {MiembroEstructura} estatal - Representante a nivel estatal de la comisión.
 * @property {MiembroEstructura[]} municipales - Red de coordinadores y enlaces municipales.
 * @property {MiembroEstructura[]} ayudantes - Personal de soporte técnico y logística operativa.
 */

/**
 * Mapa de distribución y organigrama organizacional clasificado por comisiones territoriales.
 * @type {Object<string, ColectivoEstructura>}
 */
export const ORGANIZACION_POR_MUNICIPIO = {
  "Ciencia y tecnología": {
    estatal: { 
      id: "01", 
      nombre: "Francisco Méndez", 
      cargo: "Coordinador Estatal VCF", 
      foto: fotoFrancisco,
      // Estructura añadida para redes y CV
      redes: {
        instagram: "https://www.instagram.com/franciscomendez203/",
        facebook: "https://www.facebook.com/francisco.mendez.98/?locale=es_LA",
        pdf: "https://canva.link/12gh5vwc3wl8b9c"
      }
    },
    municipales: [
      { id: "1", nombre: "Carlos Gómez", cargo: "Coordinador Municipal", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "2", nombre: "Sofía Ruiz", cargo: "Enlace Legislativo", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "3", nombre: "Dr. Roberto Silva", cargo: "Asesor de Innovación", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "4", nombre: "Ing. Beatriz Haro", cargo: "Desarrollo Tecnológico", foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ],
    ayudantes: [
      { id: "5", nombre: "Luis Pérez", cargo: "Ayudante Communication", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "6", nombre: "María José", cargo: "Ayudante Logística", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "7", nombre: "Pedro Arce", cargo: "Ayudante Redes", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ]
  },
  "Enlace empresarial": {
    estatal: { id: "02", nombre: "Elena Ramos", cargo: "Gestión Ambiental", foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
    municipales: [
      { id: "8", nombre: "Laura Estévez", cargo: "Coordinadora Municipal", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "9", nombre: "Jorge Alaníz", cargo: "Enlace Comercial", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "10", nombre: "Lic. Mario Ochoa", cargo: "Relaciones Públicas", foto: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ],
    ayudantes: [
      { id: "11", nombre: "Diana Flores", cargo: "Ayudante de Campo", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "12", nombre: "Raúl Casillas", cargo: "Ayudante Técnico", foto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ]
  },
  "Proyectos sustentables y sostenibles": {
    estatal: { id: "03", nombre: "Jorge Alaníz", cargo: "Enlace Comercial", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
    municipales: [
      { id: "13", nombre: "Miguel Ángel", cargo: "Coordinador Municipal", foto: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "14", nombre: "Elena Ramos", cargo: "Gestión Ambiental", foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } },
      { id: "15", nombre: "Ricardo Ortiz", cargo: "Vínculo Comunitario", foto: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ],
    ayudantes: [
      { id: "17", nombre: "Hugo Moreno", cargo: "Logística Operativa", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", redes: { instagram: "", facebook: "", pdf: "" } }
    ]
  }
};

/**
 * Componente de visualización estructural (Organigrama).
 * Renderiza la jerarquía del colectivo partiendo de una cabecera global de Presidencia,
 * seguida por un panel conmutador de pestañas de acuerdo al área temática seleccionada.
 * Estructura de forma descendente los niveles Estatal, Municipal y las Áreas de Apoyo Operativo.
 * * @component
 * @returns {React.ReactElement} Vista de la arquitectura del organigrama territorial.
 */
export default function Organigrama() {
  const municipios = Object.keys(ORGANIZACION_POR_MUNICIPIO);
  const [municipioActivo, setMunicipioActivo] = useState(municipios[0]);
  const datos = ORGANIZACION_POR_MUNICIPIO[municipioActivo];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Encabezado: "Organización Colectiva / Nuestro Organigrama Territorial" */}
      <div className="text-center mb-10">
        <span className="text-panda-purple font-bold text-xs uppercase tracking-widest">Organización Colectiva</span>
        <h2 className="text-3xl font-black text-white mt-2">Nuestro Organigrama <span className="text-panda-purple">Territorial</span></h2>
      </div>

      {/* Presidencia Estatal */}
      <div className="flex flex-col items-center mb-10">
        <span className="text-[10px] font-bold text-panda-gold uppercase mb-4 px-2 py-0.5 border border-panda-gold/30 rounded">Presidencia</span>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-panda-gold">
          <img src={FOTO_PRESIDENTE_ESTATAL} alt="Presidente" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-white font-bold mt-4">Nombre del Presidente</h3>
        <p className="text-panda-gold text-xs uppercase">Presidente Estatal</p>
      </div>

      {/* Selector de Áreas (Tabs) */}
      <div className="flex justify-center gap-4 mb-16">
        {municipios.map((mun) => (
          <button
            key={mun}
            onClick={() => setMunicipioActivo(mun)}
            className={`px-4 py-2 rounded-full font-bold text-sm ${municipioActivo === mun ? 'bg-panda-purple text-white' : 'bg-zinc-800 text-zinc-400'}`}
          >
            {mun}
          </button>
        ))}
      </div>

      {/* Perfil Estatal de la Comisión Seleccionada */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-bold text-panda-purple uppercase mb-4">Nivel Estatal</span>
        <Link to={`/perfil/${datos.estatal.id || 'estatal'}`} className="flex flex-col items-center group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-panda-purple group-hover:scale-105 transition-transform">
            <img src={datos.estatal.foto} alt={datos.estatal.nombre} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-white font-bold mt-3">{datos.estatal.nombre}</h3>
          <p className="text-panda-purple text-xs">{datos.estatal.cargo}</p>
        </Link>
      </div>

      {/* Lista de Municipales */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {datos.municipales.map((mun) => (
          <Link key={mun.id} to={`/perfil/${mun.id}`} className="flex flex-col items-center group">
            <span className="text-[9px] text-emerald-400 uppercase mb-2">Municipal</span>
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500 group-hover:scale-105 transition-transform">
              <img src={mun.foto} alt={mun.nombre} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-white text-sm font-bold mt-2">{mun.nombre}</h4>
            <p className="text-emerald-400 text-xs">{mun.cargo}</p>
          </Link>
        ))}
      </div>

      {/* Área de Ayudantes */}
      {datos.ayudantes.length > 0 && (
        <div className="mt-16 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {datos.ayudantes.map((ayu) => (
              <Link key={ayu.id} to={`/perfil/${ayu.id}`} className="flex flex-col items-center group">
                <span className="text-[9px] text-zinc-500 uppercase mb-2">Área de Apoyo</span>
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-600 group-hover:scale-105 transition-transform">
                  <img src={ayu.foto} alt={ayu.nombre} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-white text-xs font-bold mt-2">{ayu.nombre}</h5>
                <p className="text-zinc-400 text-[10px]">{ayu.cargo}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}