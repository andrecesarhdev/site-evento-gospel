import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-event.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* imagem de fundo */}
      <img
        src={heroImage}
        alt="Evento gospel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay escuro */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* conteúdo */}
      <div className="relative max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Produção de eventos e shows gospel
          </h1>

          <p className="mt-6 text-neutral-300 text-lg">
            Levamos cantores, filmes e eventos cristãos para igrejas em todo o
            país.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/contato"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition"
            >
              Fale comigo
            </Link>

            <Link
              to="/eventos"
              className="border border-neutral-500 px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              Eventos
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}