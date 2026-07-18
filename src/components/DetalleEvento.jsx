import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * @typedef {Object} MinutaItem
 * @property {string} hora - Identificador del bloque de tiempo.
 * @property {string} tema - Título del tema a tratar.
 * @property {string} desc - Descripción detallada del bloque.
 */

/**
 * @typedef {Object} Evento
 * @property {string} id - Identificador único del evento.
 * @property {string} nombre - Nombre comercial del evento.
 * @property {Date} fecha - Objeto Date con la fecha programada.
 * @property {string} img - URL de la imagen principal.
 * @property {string} desc - Descripción técnica extendida.
 * @property {string} resumen - Breve extracto para listados.
 * @property {string} instructor - Nombre del ponente.
 * @property {string} instructorImg - URL de la foto del instructor.
 * @property {MinutaItem[]} minuta - Desglose de actividades por hora.
 */

/**
 * @component DetalleEvento
 * @description Componente de vista detallada que renderiza la información técnica de un evento específico
 * mediante el parámetro de URL 'id'. Incluye la descripción, minuta detallada e instructor.
 */
export const DATA_EVENTOS = [
  {
    nombre: "Universidad Tecnológica de Nayarit",
    eventos: [
      { 
        id: "utn-1", 
        nombre: "Seminario de IA", 
        fecha: new Date(2026, 4, 20), 
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400", 
        desc: "Este seminario profundiza en la arquitectura de redes neuronales convolucionales (CNN) para el análisis de imágenes hiperespectrales. Analizaremos cómo el entrenamiento de modelos con datasets locales mejora la precisión en un 30% comparado con modelos genéricos, enfocándonos en la detección de Fusarium oxysporum y otros patógenos comunes en la región. Se discutirán las limitaciones de hardware en campo y soluciones mediante computación en el borde (Edge Computing).",
        resumen: "Explora la integración de redes neuronales para la detección temprana de plagas.",
        instructor: "Dra. Elena Ramírez",
        instructorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
        minuta: [
          { hora: "Hora 1", tema: "Visión Artificial", desc: "Introducción a modelos de detección de objetos agrícolas." },
          { hora: "Hora 2", tema: "Análisis Predictivo", desc: "Uso de ML para la gestión hídrica y de cultivos." },
          { hora: "Hora 3", tema: "Implementación", desc: "Ética y retos de la IA en el entorno rural." }
        ]
      },
      { 
        id: "utn-2", 
        nombre: "Hackathon 2026", 
        fecha: new Date(2026, 5, 15), 
        img: "https://images.unsplash.com/photo-1504384308090-c534fdcc356d?w=400", 
        desc: "El Hackathon 2026 no es solo una competencia de código, es un laboratorio de innovación agro-tecnológica. Los participantes trabajarán en tres ejes: conectividad LPWAN (LoRaWAN) para zonas sin cobertura, optimización de consumo energético para sensores autónomos (baterías de larga duración) y desarrollo de APIs para la integración con sistemas ERP agrícolas existentes. El objetivo es transformar una idea en un prototipo funcional (MVP) de hardware o software que resuelva problemas de trazabilidad.",
        resumen: "48 horas intensivas de desarrollo para crear soluciones tecnológicas para el campo.",
        instructor: "Ing. Carlos Ruiz",
        instructorImg: "https://images.unsplash.com/photo-1560250097-0b93528c31e6?w=200",
        minuta: [
          { hora: "Hora 1", tema: "Design Thinking", desc: "Metodologías para identificar puntos de dolor en el agro." },
          { hora: "Hora 2", tema: "Prototipado IoT", desc: "Configuración de nodos de sensores y transmisión de datos." },
          { hora: "Hora 3", tema: "Pitch Final", desc: "Presentación de soluciones ante un panel experto." }
        ]
      },
      { 
        id: "utn-3", 
        nombre: "Taller de Robótica", 
        fecha: new Date(2026, 5, 26), 
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", 
        desc: "Un taller técnico centrado en la cinemática inversa de manipuladores robóticos. Exploraremos la configuración de controladores industriales (PLC) y la comunicación a través del protocolo Modbus TCP. A través de la experimentación con brazos mecánicos, los estudiantes entenderán la importancia de la redundancia en sistemas críticos, la gestión de torque en motores paso a paso y la programación lógica para la clasificación automatizada de productos según peso y volumen",
        resumen: "Aprende los fundamentos de robótica aplicada mediante el ensamble de brazos mecánicos.",
        instructor: "Ing. Roberto Martínez",
        instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        minuta: [
          { hora: "Hora 1", tema: "Fundamentos y Seguridad", desc: "Protocolos de seguridad y grados de libertad." },
          { hora: "Hora 2", tema: "Lógica de Control", desc: "Programación de trayectorias y control PID." },
          { hora: "Hora 3", tema: "Pruebas", desc: "Ensamblaje, calibración y resolución de problemas." }
        ]
      }
    ]
  },
  {
    nombre: "AgroIndustrias del Pacífico",
    eventos: [
      { 
        id: "agro-1", 
        nombre: "Feria del Riego", 
        fecha: new Date(2026, 5, 10), 
        img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfacb?w=400", 
        desc: "Este evento aborda la transición del riego tradicional al sistema de precisión de ciclo cerrado. Analizaremos el diseño hidráulico basado en sensores de potencial matricial del suelo, que permiten determinar el momento exacto del riego para evitar la lixiviación de nutrientes. Se expondrán casos de éxito sobre la automatización mediante válvulas solenoides interconectadas a estaciones meteorológicas locales, optimizando el uso de agua hasta en un 40% en cultivos extensivos.",
        resumen: "Conoce las últimas innovaciones en sistemas de riego inteligente y eficiencia hídrica.",
        instructor: "Mtra. Ana Sofía Vaca",
        instructorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
        minuta: [
          { hora: "Hora 1", tema: "Sistemas de Riego", desc: "Diseño hidráulico y alta eficiencia." },
          { hora: "Hora 2", tema: "Integración IoT", desc: "Sensores de humedad y control remoto." },
          { hora: "Hora 3", tema: "ROI y Normativa", desc: "Análisis de inversión y cumplimiento ambiental." }
        ]
      }
    ]
  }
];

export default function DetalleEvento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const evento = DATA_EVENTOS.flatMap(p => p.eventos).find(e => e.id === id);

  if (!evento) return <div className="p-20 text-center">Evento no encontrado.</div>;

  return (
    <article className="max-w-4xl mx-auto py-16 px-6 text-white bg-zinc-950 min-h-screen">
      <button onClick={() => navigate('/eventos')} className="mb-8 text-purple-500 font-bold">← Volver al calendario</button>
      
      <img src={evento.img} alt={evento.nombre} className="w-full h-80 object-cover rounded-3xl shadow-xl" />
      
      <h1 className="text-5xl font-black mt-10 mb-6 text-center">{evento.nombre}</h1>
      <div className="max-w-2xl mx-auto mb-10">
        <p className="text-lg leading-relaxed text-zinc-300 text-left">
            {evento.desc}
        </p>
      </div>

      {evento.minuta && (
        <section className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 mb-12">
          <h3 className="text-2xl font-black mb-8 text-purple-500">Minuta de la Exposición (3 Horas)</h3>
          <div className="space-y-8">
            {evento.minuta.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="font-black text-purple-500 text-lg min-w-[80px]">{item.hora}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.tema}</h4>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="p-8 bg-zinc-900/30 rounded-3xl flex items-center gap-6 border border-zinc-800">
        <img src={evento.instructorImg} alt={evento.instructor} className="w-20 h-20 rounded-full object-cover border-4 border-purple-500" />
        <div>
          <h4 className="text-sm uppercase tracking-widest text-purple-400 font-bold">Impartido por:</h4>
          <p className="text-2xl font-black">{evento.instructor}</p>
        </div>
      </div>
    </article>
  );
}