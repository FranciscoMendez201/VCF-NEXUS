import React from 'react';

/**
 * Componente estructural de pie de página global (Footer).
 * Proporciona una sección superior de conversión (Call to Action) adaptativa 
 * y un bloque inferior dividido en cuatro columnas para la navegación institucional,
 * enlaces de transparencia, información legal y datos de contacto regional.
 * * @component
 * @returns {React.ReactElement} Estructura del pie de página con maquetación de rejilla responsiva.
 */
const Footer = () => {
  return (
    <footer className="w-full dark:bg-[#121318] transition-colors duration-300">
      
     <div className="max-w-6xl mx-auto px-6 py-24 text-center border-b border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
          ¿Listo para ser parte del cambio tecnológico?
        </h2>
        <div className="mt-6">
          <button className="px-6 py-3 bg-panda-purple text-white text-xs font-bold rounded-xl hover:bg-purple-700 hover:scale-105 active:scale-[0.98] transition-all cursor-pointer tracking-wider uppercase shadow-md shadow-purple-600/10">
            Unirse a la Comunidad
          </button>
        </div>
      </div>

      <div className="bg-[#0b0c10] text-zinc-400 text-sm py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-zinc-800/60">
            
            <div className="flex flex-col gap-4">
              <div className="font-bold text-lg text-white tracking-tight">
                <span className="text-panda-gold">VOCES</span> DEL FUTURO <span className="text-panda-gold">NAYARIT</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                Plataforma de profesionales especializados impulsando proyectos tecnológicos, ciberseguridad e infraestructura digital en la región.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Explorar</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
                <li><a href="#inicio" className="hover:text-panda-purple transition-colors">Inicio</a></li>
                <li><a href="#proyectos" className="hover:text-panda-purple transition-colors">Proyectos Tecnológicos</a></li>
                <li><a href="#sociedad" className="hover:text-panda-purple transition-colors">Sociedad e Impacto</a></li>
                <li><a href="#legislacion" className="hover:text-panda-purple transition-colors">Legislación Digital</a></li>
                <li><a href="#talento" className="hover:text-panda-purple transition-colors">Nuestro Talento</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Transparencia</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
                <li><a href="#privacidad" className="hover:text-panda-purple transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#terminos" className="hover:text-panda-purple transition-colors">Términos y Condiciones</a></li>
                <li><a href="#politica" className="hover:text-panda-purple transition-colors">Políticas del Grupo</a></li>
                <li><a href="#manuales" className="hover:text-panda-purple transition-colors">Gobernanza e IT</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Contacto</h3>
              
              <div className="flex items-center gap-2.5">
                <a href="#instagram" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-panda-purple hover:border-panda-purple transition-all" aria-label="Instagram">
                  📸
                </a>
                <a href="#facebook" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-panda-purple hover:border-panda-purple transition-all" aria-label="Facebook">
                  👥
                </a>
                <a href="#correo" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-panda-purple hover:border-panda-purple transition-all" aria-label="Email">
                  ✉️
                </a>
              </div>

              <div className="text-xs text-zinc-500 flex flex-col gap-1.5 mt-1">
                <span className="text-zinc-400 font-medium">📍 Bahía de Banderas, Nayarit</span>
                <span>✉️ contacto@vocesdelfuturo.mx</span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xxs text-zinc-600 font-medium">
            <div>
              © 2026 Voces del Futuro Nayarit. Todos los derechos reservados.
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;