import { motion } from "framer-motion";
import { Film, Mic, Music } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>
        <h2 className="text-3xl font-bold mb-12">O que fazemos</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border border-neutral-800 rounded-lg">
            <Music size={32} />
            <h3 className="mt-4 font-semibold text-lg">Shows Gospel</h3>
            <p className="text-neutral-400 mt-2">
              Produção de shows e eventos musicais em igrejas.
            </p>
          </div>

          <div className="p-6 border border-neutral-800 rounded-lg">
            <Mic size={32} />
            <h3 className="mt-4 font-semibold text-lg">Booking de Cantores</h3>
            <p className="text-neutral-400 mt-2">
              Levamos cantores gospel para eventos e congressos.
            </p>
          </div>

          <div className="p-6 border border-neutral-800 rounded-lg">
            <Film size={32} />
            <h3 className="mt-4 font-semibold text-lg">Divulgação de Filmes</h3>
            <p className="text-neutral-400 mt-2">
              Sessões especiais de filmes cristãos em igrejas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
