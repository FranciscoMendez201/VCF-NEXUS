import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Importación de la fuente de datos
import { DATA_EVENTOS } from './DetalleEvento';

/**
 * @component SeccionEventosPatrocinadores
 * @description Pantalla principal de eventos. Gestiona el calendario, el filtrado 
 * por patrocinador y la visualización detallada de cada evento con diseño alineado a la izquierda.
 */
export default function SeccionEventosPatrocinadores() {
  const [patrocinadorActivo, setPatrocinadorActivo] = useState(DATA_EVENTOS[0]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  
  const navigate = useNavigate();

  /**
   * Verifica si existe un evento en una fecha específica para mostrar el punto en el calendario.
   */
  const tieneEvento = (date) => {
    return patrocinadorActivo.eventos.some(ev => 
      ev.fecha.getDate() === date.getDate() &&
      ev.fecha.getMonth() === date.getMonth() &&
      ev.fecha.getFullYear() === date.getFullYear()
    );
  };

  // Filtrado de eventos según la fecha seleccionada en el calendario
  const eventosFiltrados = patrocinadorActivo.eventos.filter(ev => 
    ev.fecha.toDateString() === fechaSeleccionada.toDateString()
  );

  return (
    <section className="py-16 bg-white dark:bg-brand-bg text-black dark:text-brand-text max-w-6xl mx-auto px-6">
      
      {/* Estilos para personalizar el componente de calendario externo */}
      <style>{`
        .react-calendar { border: none !important; background: transparent !important; }
        .react-calendar__tile--active { background: #7c3aed !important; color: white !important; border-radius: 8px; }
        .react-calendar__tile { height: 60px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
      `}</style>

      <h2 className="text-3xl font-black mb-10 text-center">
        <span className="text-panda-purple">Calendario</span> de Eventos
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* COLUMNA IZQUIERDA: Calendario y selector de Patrocinadores */}
        <div className="space-y-8">
          <div className="bg-zinc-100 dark:bg-zinc-900/10 p-4 rounded-2xl border border-zinc-200 dark:border-brand-border">
            <Calendar 
              onChange={setFechaSeleccionada} 
              value={fechaSeleccionada}
              className="w-full text-black dark:text-white"
              tileContent={({ date, view }) => 
                view === 'month' && tieneEvento(date) ? (
                  <div className="flex justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-panda-purple rounded-full"></div>
                  </div>
                ) : null
              }
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold text-panda-purple uppercase tracking-widest mb-2">Patrocinadores</p>
            {DATA_EVENTOS.map((pat) => (
              <button
                key={pat.nombre}
                onClick={() => setPatrocinadorActivo(pat)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  patrocinadorActivo.nombre === pat.nombre 
                  ? 'bg-panda-purple text-white shadow-lg' 
                  : 'bg-zinc-100 dark:bg-zinc-900/20 hover:bg-zinc-200 dark:hover:bg-zinc-900/40'
                }`}
              >
                {pat.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: Lista de eventos filtrados */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold">Eventos de {patrocinadorActivo.nombre}</h3>
          
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((ev) => (
              <div 
                key={ev.id} 
                onClick={() => navigate(`/evento/${ev.id}`)}
                className="cursor-pointer flex flex-col sm:flex-row gap-6 p-5 border border-zinc-200 dark:border-brand-border rounded-2xl bg-zinc-50 dark:bg-zinc-900/10 hover:border-panda-purple transition-all shadow-sm hover:shadow-md"
              >
                <img src={ev.img} alt={ev.nombre} className="w-full sm:w-40 h-40 object-cover rounded-xl" />
                
                {/* Contenedor de texto alineado a la izquierda */}
                <div className="flex flex-col items-start justify-between py-1 text-left w-full">
                  <div className="w-full">
                    <h4 className="font-black text-xl text-black dark:text-white leading-tight">
                      {ev.nombre}
                    </h4>
                    
                    <div className="flex flex-col gap-2 mt-3">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                        <span className="text-panda-purple font-bold">Imparte:</span> {ev.instructor}
                      </p>
                      
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                        {ev.resumen || "Sin resumen disponible"}
                      </p>

                      <p className="text-sm text-zinc-500 dark:text-zinc-500 font-semibold">
                        <span className="text-panda-purple font-bold">Fecha:</span> {ev.fecha.toLocaleDateString('es-MX', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-panda-purple mt-4 flex items-center gap-1">
                    Ver detalles del evento →
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl text-center">
              <p className="text-zinc-500">No hay eventos programados para esta fecha. ¡Selecciona otro día!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}