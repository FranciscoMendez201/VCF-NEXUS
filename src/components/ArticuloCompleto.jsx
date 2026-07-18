import React from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * @typedef {Object} Articulo
 * @property {string} titulo - Nombre oficial de la investigación o proyecto científico.
 * @property {string} autores - Nombres y grados académicos de los investigadores.
 * @property {string} fecha - Mes y año de publicación del artículo.
 * @property {string} revista - Diario o entidad indexada de divulgación donde se aloja el paper.
 * @property {string[]} cuerpo - Arreglo de cadenas secuenciales con formato "{Sección}: {Contenido}".
 */

/**
 * Diccionario indexado por claves alfanuméricas que actúa como el almacén de datos
 * local para las investigaciones científicas y tecnológicas de la plataforma.
 * @type {Object.<string, Articulo>}
 */
const BASE_DE_DATOS_EXTENSA = {
  "bio-1": {
    titulo: "Optimización del cultivo de mango en Nayarit mediante sensores IoT",
    autores: "Dr. Roberto Silva, Ing. Beatriz Haro",
    fecha: "Mayo 2026",
    revista: "Revista de Agro-Tecnología Regional (Vol. 12)",
    cuerpo: [
      "Introducción: La producción de mango en el estado de Nayarit representa uno de los pilares económicos más importantes del sector agrícola. Sin embargo, la variabilidad en los patrones de precipitación ha generado la necesidad de adoptar tecnologías de precisión.",
      "Metodología: Se instalaron 45 nodos de sensores inalámbricos en un huerto piloto en la región costera. Cada nodo mide la humedad volumétrica del suelo a dos profundidades (15 y 30 cm), la temperatura ambiental y la radiación solar incidente. Los datos fueron transmitidos vía LoRaWAN a una central local.",
      "Resultados: Los algoritmos de irrigación automatizada basados en el déficit de presión de vapor (VPD) redujeron el desperdicio hídrico en un 25% en comparación con los métodos de calendarización tradicional, manteniendo intacto el calibre y la concentración de azúcares de la fruta.",
      "Conclusión: La integración de IoT en la agricultura nayarita no solo optimiza el recurso vital del agua, sino que eleva la competitividad internacional del producto frente a mercados exigentes."
    ]
  },
  "bio-2": {
    titulo: "Impacto del cambio climático en la producción acuícola de San Blas",
    autores: "Dra. Elena Ramos, M. en C. Ricardo Ortiz",
    fecha: "Marzo 2026",
    revista: "Nayarit Science Quarterly",
    cuerpo: [
      "Introducción: La región de San Blas es históricamente reconocida por su alta productividad en la acuicultura de crustáceos. No obstante, las fluctuaciones atípicas de temperatura registradas en los últimos años imponen un desafío crítico para la supervivencia y desarrollo del camarón blanco (Litopenaeus vannamei).",
      "Metodología: Esta investigación analizó de forma continua durante un ciclo de 12 meses las variaciones fisicoquímicas y de temperatura en tres de los principales sistemas estuarinos de la zona. Se correlacionaron las lecturas térmicas directas con las bitácoras semanales de biomasa y tasas de mortalidad en estanques comerciales rústicos.",
      "Resultados: Los datos evidenciaron que picos de temperatura superiores a los 32°C aceleran el estrés metabólico del espécimen, reduciendo su conversión alimenticia. Como respuesta adaptativa, se diseñó un modelo de control biológico con recirculación de agua optimizada y sombreado perimetral que logró estabilizar el ecosistema artificial.",
      "Conclusión: La implementación de sistemas de monitoreo y control biológico adaptativo es urgente para mitigar la vulnerabilidad del sector acuícola local frente a las dinámicas de calentamiento global."
    ]
  },
  "ener-1": {
    titulo: "Potencial de generación híbrida (Solar-Eólica) en la zona serrana",
    autores: "Ing. Carlos Gómez, Dr. Alejandro Méndez",
    fecha: "Enero 2026",
    revista: "Journal of Renewable Energy Mexico",
    cuerpo: [
      "Introducción: Las comunidades rurales de la zona serrana de Nayarit experimentan brechas significativas en el acceso a la red eléctrica convencional debido a la complejidad de la orografía de la Sierra Madre Occidental. Este artículo explora soluciones sustentables aisladas basadas en microredes híbridas.",
      "Metodología: Se recolectaron datos meteorológicos satelitales e históricos de irradiancia solar y velocidad de viento en puntos estratégicos durante un periodo de dos años. Con estos insumos, se realizaron simulaciones computacionales de despacho energético empleando software especializado para optimizar el dimensionamiento de un sistema combinado con banco de baterías.",
      "Resultados: Las simulaciones demostraron que el patrón climático local presenta una complementariedad excelente: los meses de menor recurso solar coinciden con ráfagas de viento estables por la altitud. Una microred configurada con un 70% de generación fotovoltaica y 30% eólica es capaz de garantizar un suministro eléctrico continuo del 98.5% para consumos domésticos básicos.",
      "Conclusión: Los sistemas híbridos descentralizados representan la alternativa técnica y económica más viable para la electrificación sustentable de la sierra nayarita, promoviendo el desarrollo social sin generar huella de carbono local."
    ]
  },
  "tic-1": {
    titulo: "Algoritmos de visión artificial para la detección de plagas en tiempo real",
    autores: "Ing. Beatriz Haro, Dr. Roberto Silva",
    fecha: "Junio 2026",
    revista: "Iberoamerican Journal of Computer Science",
    cuerpo: [
      "Introducción: La detección temprana de vectores fitopatógenos, como la mosca de la fruta, es crucial para evitar cuarentenas agrícolas que congelen la exportación de productos locales. Los métodos de inspección visual manual resultan lentos e insuficientes ante grandes extensiones territoriales.",
      "Metodología: Se entrenó una red neuronal convolucional (CNN) optimizada empleando un dataset de más de 8,000 imágenes de hojas y frutos afectados por plagas endémicas del estado. El modelo fue compactado mediante técnicas de cuantización para permitir su ejecución local (edge computing) en smartphones de gama media sin requerir conexión a internet en el campo.",
      "Resultados: En las pruebas de validación sobre el terreno, el algoritmo computacional alcanzó una precisión del 94.2% en la identificación del patógeno y un tiempo de respuesta inferior a los 180 milisegundos por captura, emitiendo alertas inmediatas e indicaciones de aislamiento para la zona de contagio.",
      "Conclusión: El uso de herramientas basadas en inteligencia artificial de borde empodera directamente a los productores locales, democratizando la tecnología agrícola de vanguardia para la protección autónoma de los cultivos en Nayarit."
    ]
  }
};

/**
 * Componente de Vista de Detalle Dinámica para artículos académicos.
 * Recupera el identificador del artículo desde los parámetros de la URL,
 * procesa su estructura semántica y renderiza el contenido con un diseño
 * adaptado a lectura inmersiva con soporte para modo claro y oscuro.
 * * @component
 * @returns {React.ReactElement} Interfaz del artículo completo o vista fallback 404.
 */
export default function ArticuloCompleto() {
  const { id } = useParams();
  const articulo = BASE_DE_DATOS_EXTENSA[id];

  if (!articulo) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-brand-dark">Artículo no encontrado</h2>
        <Link to="/articulos" className="text-panda-purple mt-4 inline-block font-bold">Volver a Artículos</Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-3xl mx-auto px-4 md:px-6 py-12 transition-colors duration-300">
      
      <Link 
        to="/articulos" 
        className="inline-flex items-center gap-2 text-xs font-bold text-panda-purple hover:text-purple-700 dark:hover:text-purple-400 mb-10 group transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a Artículos
      </Link>

      <article className="w-full">
        <div className="border-b border-zinc-100 dark:border-zinc-900 pb-8 mb-10 text-left">
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 inline-block bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/20">
            {articulo.revista}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight leading-tight mt-2 mb-4">
            {articulo.titulo}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 dark:text-zinc-500 font-semibold">
            <span className="text-brand-dark dark:text-zinc-300 font-bold">Por: {articulo.autores}</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <span>Publicado en {articulo.fecha}</span>
          </div>
        </div>

        <div className="space-y-10 text-left">
          {articulo.cuerpo.map((parrafo, idx) => {
            const partes = parrafo.split(/:(.+)/);
            const tieneEncabezado = partes.length > 1;

            return (
              <div key={idx} className="group">
                {tieneEncabezado ? (
                  <>
                    <h2 className="text-base font-extrabold text-panda-purple dark:text-purple-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-panda-purple dark:bg-purple-500 rounded-xs inline-block"></span>
                      {partes[0].trim()}
                    </h2>
                    <p className="text-base md:text-[17px] text-brand-text/90 dark:text-zinc-300 leading-relaxed font-normal tracking-wide antialiased pl-0 md:pl-3.5">
                      {partes[1].trim()}
                    </p>
                  </>
                ) : (
                  <p className="text-base md:text-[17px] text-brand-text/90 dark:text-zinc-300 leading-relaxed font-normal tracking-wide antialiased">
                    {parrafo}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-center">
          <span className="inline-block w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 mx-1"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 mx-1"></span>
        </div>
      </article>
    </main>
  );
}