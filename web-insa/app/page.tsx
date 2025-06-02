import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"
import SobreMi from "@/components/SobreMi";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Sección con fondo fijo tipo parallax */}
      <section
        className="w-full h-[360px] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/sala-masaje.jpg')" }}
      >
      </section>
      <SobreMi />

      <Servicios />
      

      <Footer />
    </>
  );
}
