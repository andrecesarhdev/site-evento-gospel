import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Produção de eventos e shows gospel
          </h1>

          <p className="mt-6 text-neutral-400 text-lg">
            Levamos cantores, filmes e eventos cristãos para igrejas em todo o
            país.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/contato"
              className="bg-white text-black px-6 py-3 rounded-md font-medium"
            >
              Fale comigo
            </Link>

            <Link
              to="/eventos"
              className="border border-neutral-700 px-6 py-3 rounded-md"
            >
              Eventos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
