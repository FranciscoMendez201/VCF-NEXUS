// components/Proyectos.jsx
import React from 'react';
import EnMantenimiento from './EnMantenimiento'; 

/**
 * @component Proyectos
 * @description Sección de la cartera de proyectos.
 */
export default function Proyectos() {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 text-purple-500">Proyectos</h2>
          <p className="text-zinc-400 text-lg">Innovación tecnológica en desarrollo.</p>
        </header>

        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10">
          <EnMantenimiento />
        </div>
      </div>
    </section>
  );
}