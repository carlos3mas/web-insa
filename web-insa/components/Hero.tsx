import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white overflow-hidden py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Logo principal con fondo blanco */}
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[1200px] lg:h-[800px] mx-auto bg-white rounded-full p-8">
            <Image
              src="/images/logo_transparente.png"
              alt="Shinka Terapies"
              fill
              sizes="(max-width: 640px) 320px,
                     (max-width: 768px) 400px,
                     (max-width: 1024px) 600px,
                     800px"
              className="object-contain"
              priority
            />
          </div>

          {/* Línea separadora */}
          <div className="relative -mx-[50vw] left-[50%] right-[50%] w-screen border-t border-rosa/20"></div>

          {/* Título y frase representativa */}
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h2 className="text-xs sm:text-sm md:text-base text-gris uppercase tracking-widest font-serif">
              Acompañamos a las personas en su camino hacia el bienestar físico,
              mental y emocional
            </h2>
            <p className="text-[0.7rem] sm:text-xs md:text-sm text-gris/80 tracking-wide font-sans">
              Combinando masajes y terapias energéticas que les ayudan a
              reconectar con su esencia, liberar tensiones y recuperar el
              equilibrio interior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
