/**
 * @file App.jsx
 * @description Componente raíz de la aplicación VCF-NEXUS. 
 * Gestiona el enrutamiento, la persistencia del tema (dark/light) y el layout global.
 */

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes de Layout y Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Vistas y Secciones
import BannerSlider from './components/BannerSlider';
import Hero from './components/Hero';
import Team from './components/Team'; 
import MarkEvents from './components/MarkEvents';
import GridProjects from './components/GridProjects';
import Organigrama from './components/Organigrama'; 
import DetallePerfil from "./components/DetallePerfil";
import Articulos from './components/Articulos';
import ArticuloCompleto from './components/ArticuloCompleto';
import VistaProyectoPatrocinador from './components/VistaProyectoPatrocinador';
import SeccionEventosPatrocinadores from './components/SeccionEventosPatrocinadores';
import DetalleEvento from './components/DetalleEvento';

/**
 * Componente funcional principal de la aplicación.
 * * @component
 * @returns {JSX.Element} Estructura base de la aplicación con Navbar, Rutas y Footer.
 */
function App() {
  /**
   * Estado para manejar el modo oscuro.
   * Inicializa basándose en localStorage o preferencia del sistema.
   */
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  /**
   * Efecto para aplicar/quitar la clase 'dark' en el nodo raíz 
   * y persistir la preferencia en localStorage.
   */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/VCF-NEXUS/" element={
              <>
                <BannerSlider />
                <Hero />
                <Team />
                <MarkEvents />
                <GridProjects />
              </>
            } />
            <Route path="/eventos" element={<SeccionEventosPatrocinadores />} />
            <Route path="/evento/:id" element={<DetalleEvento />} />
            <Route path="/proyectos-patrocinadores/:id" element={<VistaProyectoPatrocinador />} />
            <Route path="/organigrama" element={<Organigrama />} />
            <Route path="/perfil/:id" element={<DetallePerfil />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/articulos/:id" element={<ArticuloCompleto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;