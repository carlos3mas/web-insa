import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-beige text-gris py-10 mt-20 border-t border-rosa/20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        {/* Título con Cormorant Garamond */}
        <h2 className="text-2xl font-serif">Shinka Terapies</h2>
        
        {/* Texto con Karla */}
        <p className="font-sans">Bienestar y equilibrio para tu cuerpo y tu alma</p>

        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com/shinka_terapies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-eucalipto transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright con Karla */}
        <p className="text-sm font-sans">
          &copy; {new Date().getFullYear()} Shinka Terapies. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
