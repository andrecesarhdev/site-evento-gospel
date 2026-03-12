import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Quer levar um evento gospel para sua igreja?
        </h2>

        <p className="text-neutral-400 mt-8 mb-8">
          Entre em contato e vamos organizar um evento inesquecível.
        </p>
        <Link to="/contato" className="mt-8 bg-white text-black px-8 py-2 rounded-md font-medium">Contato</Link>

      </div>
    </section>
  );
}
