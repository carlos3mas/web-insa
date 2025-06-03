import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"
import SobreMi from "@/components/SobreMi";
import Servicios from "@/components/Servicios";
import Blog from "@/components/Blog";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />

      <Hero />

      {/* Parallax section with responsive height */}
      <section
        className="w-full h-[200px] sm:h-[280px] md:h-[360px] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/sala-masaje.jpg')",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <SobreMi />

      <Servicios />

      <Blog />

      <Contacto />

      
      <Footer />
    </main>
  );
}
