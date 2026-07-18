import React from 'react';

const EnMantenimiento = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <img 
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXl5d3gwNzd0czBsZTJsZW56OW5uNm43eXlzaDBodjFibmg0OGlyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6acgoukJFoGK4/giphy.gif" 
        alt="En construcción" 
        className="w-64 h-64 mb-8"
      />
      <h2 className="text-3xl font-black text-white mb-4">Sección en Mantenimiento</h2>
      <p className="text-zinc-400 text-lg">Estamos trabajando para traerte lo mejor. ¡Vuelve pronto!</p>
    </div>
  );
};

export default EnMantenimiento;