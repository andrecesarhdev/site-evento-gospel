import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";

export default function Artistas() {
  const artistas = [
    {
      title: "Cantor João",
      subtitle: "Ministério de Louvor",
    },
    {
      title: "Banda Esperança",
      subtitle: "Louvor e Adoração",
    },
    {
      title: "Ana Souza",
      subtitle: "Cantora Gospel",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cantores Gospel para Eventos</title>

        <meta
          name="description"
          content="Conheça os cantores gospel disponíveis para eventos e shows em igrejas."
        />
      </Helmet>
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-10">Artistas</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {artistas.map((artista, index) => (
            <Card
              key={index}
              title={artista.title}
              subtitle={artista.subtitle}
            />
          ))}
        </div>
      </section>
    </>
  );
}
