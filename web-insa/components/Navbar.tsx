"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const enlaces = [
  { etiqueta: "Inicio", href: "#inicio" },
  { etiqueta: "Servicios", href: "#servicios" },
  { etiqueta: "Sobre mí", href: "#sobre-mi" },
  { etiqueta: "Blog", href: "#blog" },
  { etiqueta: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-beige/95 backdrop-blur-sm border-b border-rosa/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Botón hamburguesa solo visible en móvil */}
        <button 
          className="md:hidden text-gris hover:text-eucalipto transition-colors font-sans" 
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Enlaces centrados en desktop */}
        <div className="hidden md:flex gap-10 mx-auto">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-gris text-sm uppercase tracking-widest font-sans
                       relative group transition-colors duration-300
                       hover:text-eucalipto"
            >
              <span className="relative">
                {enlace.etiqueta}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eucalipto 
                             transition-all duration-300 ease-in-out
                             group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {abierto && (
        <div className="md:hidden bg-beige/95 backdrop-blur-sm px-4 pb-4 pt-2 flex flex-col items-center space-y-4">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-gris text-sm uppercase tracking-widest font-sans
                       relative group transition-colors duration-300
                       hover:text-eucalipto"
            >
              <span className="relative">
                {enlace.etiqueta}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eucalipto 
                             transition-all duration-300 ease-in-out
                             group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
