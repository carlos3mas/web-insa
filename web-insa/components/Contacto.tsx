"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconLocation, IconBrandWhatsapp } from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useEffect(() => {
    const cookies = document.cookie;
    if (cookies.includes("acceptCookies=true")) {
      setAcceptedCookies(true);
    }
  }, []);

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert("Por favor, rellene todos los campos");
      return;
    }

    if (!captchaToken) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    if (!acceptedCookies) {
      alert("Debes aceptar el uso de cookies para continuar.");
      return;
    }

    const message = encodeURIComponent(
      `¡Hola! Me gustaría solicitar información:\n\n` +
      `Nombre: ${formData.name}\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `Mensaje: ${formData.message}`
    );

    const whatsappNumber = "34680716128";
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    window.open(url, "_blank");

    setFormData({ name: "", phone: "", message: "" });
    setCaptchaToken(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gris mb-4">
          Contacto
        </h2>
        <div className="w-16 sm:w-24 h-0.5 bg-rosa mx-auto"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl font-serif text-gris mb-4 sm:mb-6">
              Información de Contacto
            </h3>

            <div className="flex items-center space-x-4">
              <IconPhone className="text-rosa w-5 sm:w-6 h-5 sm:h-6" />
              <a href="tel:+34123456789" className="text-gris hover:text-rosa text-sm sm:text-base">
                +34 680716128
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <IconMail className="text-rosa w-5 sm:w-6 h-5 sm:h-6" />
              <a href="mailto:info@example.com" className="text-gris hover:text-rosa text-sm sm:text-base">
                info@example.com
              </a>
            </div>

            <div className="flex items-start space-x-4">
              <IconLocation className="text-rosa w-5 sm:w-6 h-5 sm:h-6 mt-1" />
              <p className="text-gris text-sm sm:text-base">
                Calle Example, 123<br />
                12200 Onda<br />
                Castellón, España
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gris text-sm sm:text-base mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-200 focus:outline-none focus:border-rosa"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gris text-sm sm:text-base mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-200 focus:outline-none focus:border-rosa"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gris text-sm sm:text-base mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-200 focus:outline-none focus:border-rosa"
                  required
                />
              </div>

              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY!} onChange={handleCaptcha} className="mt-4" />

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-2 text-sm rounded hover:bg-black/80 transition-all duration-300"
                >
                  <IconBrandWhatsapp className="w-4 h-4" strokeWidth={2} />
                  <span className="font-medium">Enviar</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
