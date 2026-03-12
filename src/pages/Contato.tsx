import { Helmet } from "react-helmet-async";

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Eventos Gospel</title>

        <meta
          name="description"
          content="Entre em contato para levar um evento gospel ou cantor cristão para sua igreja."
        />
      </Helmet>
      <section className="max-w-xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-10">Contato</h1>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nome"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded"
          />

          <input
            type="text"
            placeholder="Igreja"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded"
          />

          <input
            type="text"
            placeholder="Cidade"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded"
          />

          <textarea
            placeholder="Mensagem"
            rows={5}
            className="p-3 bg-neutral-900 border border-neutral-800 rounded"
          />

          <button className="bg-white text-black py-3 rounded font-medium">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
