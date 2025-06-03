"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 relative pb-32">
     
      <motion.div
        className="mb-16 relative"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-serif text-gris tracking-wide mb-4">
              SOBRE MÍ
            </h2>
            <span className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-rosa transform -translate-x-1/2"></span>
          </div>
        </div>
      </motion.div>
      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            className="relative h-[400px] md:h-[800px] rounded-lg overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src="/images/quiensoy.JPG"
              alt="Sobre mí"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="relative inline-flex items-center mb-8">
              <h2 className="text-3xl md:text-5xl font-serif text-gris tracking-wide mr-4">
                Victor Insa
              </h2>
            </div>

            <div className="space-y-6 text-gris">
              <p className="font-sans tracking-wide">
                Hace unos años despertó en mí un profundo interés por el
                bienestar del cuerpo, la expansión de la conciencia y el
                desarrollo interior. Desde entonces, he dedicado mi camino a
                formarme en terapias energéticas y herramientas de sanación que
                me han transformado tanto a nivel personal como profesional.
              </p>

              <p className="font-sans tracking-wide">
                No me considero un mentor ni un guía espiritual, pero sí una
                persona comprometida en acompañarte con empatía y presencia en
                tu propio proceso. Estoy aquí para ayudarte a reconectar contigo
                misma, liberar bloqueos y encontrar equilibrio en cuerpo, mente
                y alma.
              </p>

              <p className="font-sans tracking-wide">
                En este tiempo, he tenido la oportunidad de capacitarme en
                técnicas que considero poderosas y profundamente sanadoras, y
                que aplico desde el respeto, la intuición y el conocimiento. No
                puedo sentirme más agradecido por este camino y por cada persona
                que decide recorrerlo conmigo.
              </p>

              {/* Frase destacada */}
              <blockquote className="text-lg md:text-xl text-eucalipto italic font-serif tracking-wide border-l-4 border-eucalipto pl-4 my-8">
                &nbsp; &#34; Sanar no es cambiar lo que eres, sino recordar
                quién fuiste antes de olvidar tu propia luz. &#34; &nbsp;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
