import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ORGANIZACION_POR_MUNICIPIO } from './Organigrama';
import { FaInstagram, FaFacebook, FaFilePdf } from 'react-icons/fa'; // Importa los iconos

export default function DetallePerfil() {
  const { id } = useParams();
  const navigate = useNavigate();

  let usuarioEncontrado = null;
  
  Object.values(ORGANIZACION_POR_MUNICIPIO).forEach((area) => {
    if (String(area.estatal.id) === String(id)) usuarioEncontrado = area.estatal;
    const muni = area.municipales.find(m => String(m.id) === String(id));
    if (muni) usuarioEncontrado = muni;
    const ayu = area.ayudantes.find(a => String(a.id) === String(id));
    if (ayu) usuarioEncontrado = ayu;
  });

  if (!usuarioEncontrado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h2 className="text-2xl font-bold mb-4">Usuario no encontrado</h2>
        <button onClick={() => navigate(-1)} className="bg-panda-purple px-6 py-2 rounded-lg">Regresar</button>
      </div>
    );
  }

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-12 text-white animate-in fade-in duration-500">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-panda-gold shadow-2xl mb-6">
          <img src={usuarioEncontrado.foto} alt={usuarioEncontrado.nombre} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-4xl font-black text-white">{usuarioEncontrado.nombre}</h2>
        <p className="text-panda-gold font-bold uppercase tracking-[0.2em] text-sm mt-2">{usuarioEncontrado.cargo}</p>
      </div>

      <div className="bg-zinc-900/80 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm mb-8">
        <h3 className="text-xl font-bold mb-4 text-panda-purple flex items-center">
          <span className="mr-2">◆</span> Semblanza Profesional
        </h3>
        <p className="text-zinc-300 leading-relaxed text-lg italic">
          {usuarioEncontrado.semblanza || 
          `Como ${usuarioEncontrado.cargo}, ${usuarioEncontrado.nombre} es un pilar estratégico dentro de nuestra estructura. 
          Su dedicación es clave para alcanzar las metas que nos hemos propuesto en Voces del Futuro Nayarit.`}
        </p>
      </div>

      {/* Nueva Sección: Redes Sociales y CV */}
      <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
        <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest w-full text-center mb-2">Conectar y CV</p>
        
        {usuarioEncontrado.redes?.instagram && (
          <a href={usuarioEncontrado.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white transition-colors">
            <FaInstagram />
          </a>
        )}
        
        {usuarioEncontrado.redes?.facebook && (
          <a href={usuarioEncontrado.redes.facebook} target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 hover:text-white transition-colors">
            <FaFacebook />
          </a>
        )}

        {usuarioEncontrado.redes?.pdf && (
          <a href={usuarioEncontrado.redes.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-red-900/20">
            <FaFilePdf /> CV PDF
          </a>
        )}
      </div>

      <div className="mt-12 flex justify-start">
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 bg-zinc-800 hover:bg-panda-purple text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Regresar
        </button>
      </div>
    </main>
  );
}