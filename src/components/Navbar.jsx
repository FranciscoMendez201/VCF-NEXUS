import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de barra de navegación superior global (Navbar).
 * Proporciona un encabezado responsivo que incluye branding institucional,
 * enlaces de navegación para escritorio, conmutador de tema de color (Light/Dark),
 * y un menú desplegable adaptativo controlado por estado para dispositivos móviles.
 * * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.darkMode - Estado actual del tema visual de la aplicación.
 * @param {function(boolean):void} props.setDarkMode - Función mutadora para alternar el tema visual.
 * @returns {React.ReactElement} Estructura de navegación superior con control responsivo de estados.
 */
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  /**
   * Gestiona la retroalimentación visual táctil y el flujo de cierre
   * de la interfaz desplegable en dispositivos móviles.
   * @param {string} itemKey - Identificador del enlace seleccionado.
   */
  const handleMobileClick = (itemKey) => {
    setClickedItem(itemKey);
    
    setTimeout(() => {
      setIsOpen(false);
      setClickedItem(null);
    }, 200);
  };

  return (
    <nav className="w-full border-b border-brand-border bg-brand-bg transition-colors duration-300 relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        
        <div className="font-bold text-xl text-brand-dark tracking-tight shrink-0">
          <span className="text-panda-gold">VOCES</span> DEL FUTURO <span className="text-panda-gold">NAYARIT</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-brand-text hover:text-panda-purple transition-colors">Inicio</Link>
          <Link to="/" className="text-sm font-medium text-brand-text hover:text-panda-purple transition-colors">Proyectos</Link>
          <Link to="/organigrama" className="text-sm font-medium text-brand-text hover:text-panda-purple transition-colors">Organigrama</Link>
          <Link to="/articulos" className="text-sm font-medium text-brand-text hover:text-panda-purple transition-colors">Artículos</Link>
          <Link to="/eventos" className="text-sm font-medium text-brand-text hover:text-panda-purple transition-colors">Eventos Patrocinadores</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-brand-border text-base cursor-pointer hover:scale-105 transition-transform flex items-center justify-center w-10 h-10"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button className="hidden sm:block px-4 py-2 bg-panda-purple text-white text-xs font-bold rounded-xl hover:bg-purple-700 transition-colors cursor-pointer">
            BLOG
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-brand-border bg-zinc-100 dark:bg-zinc-800 text-brand-dark cursor-pointer flex flex-col justify-center items-center gap-1 w-10 h-10 transition-all"
          >
            <span className={`h-0.5 w-5 bg-current transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border px-6 py-4 flex flex-col gap-1 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none'
        }`}
      >
        <Link 
          to="/" 
          onClick={() => handleMobileClick('inicio')} 
          className={`block w-full text-center text-base font-semibold py-3 px-4 rounded-xl transition-all duration-150 active:bg-panda-purple active:text-white ${
            clickedItem === 'inicio' 
              ? 'bg-panda-purple text-white!' 
              : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
          }`}
        >
          Inicio
        </Link>
        
        <Link 
          to="/" 
          onClick={() => handleMobileClick('proyectos')} 
          className={`block w-full text-center text-base font-semibold py-3 px-4 rounded-xl transition-all duration-150 active:bg-panda-purple active:text-white ${
            clickedItem === 'proyectos' 
              ? 'bg-panda-purple text-white!' 
              : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
          }`}
        >
          Proyectos
        </Link>
        
        <Link 
          to="/organigrama" 
          onClick={() => handleMobileClick('organigrama')} 
          className={`block w-full text-center text-base font-semibold py-3 px-4 rounded-xl transition-all duration-150 active:bg-panda-purple active:text-white ${
            clickedItem === 'organigrama' 
              ? 'bg-panda-purple text-white!' 
              : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
          }`}
        >
          Organigrama
        </Link>
        
        <Link 
          to="/articulos" 
          onClick={() => handleMobileClick('articulos')} 
          className={`block w-full text-center text-base font-semibold py-3 px-4 rounded-xl transition-all duration-150 active:bg-panda-purple active:text-white ${
            clickedItem === 'articulos' 
              ? 'bg-panda-purple text-white!' 
              : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
          }`}
        >
          Artículos
        </Link>
        
        <button className="sm:hidden w-full mt-3 px-4 py-3 bg-panda-purple text-white text-sm font-bold rounded-xl active:bg-purple-800 active:scale-[0.98] transition-all cursor-pointer text-center">
          BLOG
        </button>
      </div>
    </nav>
  );
};

export default Navbar;