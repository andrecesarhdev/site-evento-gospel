import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";

export default function Filmes() {
  const filmes = [
    {
      title: "Caminho da Fé",
      subtitle: "Filme Cristão",
    },
    {
      title: "A Promessa",
      subtitle: "Drama Gospel",
    },
    {
      title: "Esperança",
      subtitle: "História Inspiradora",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Filmes Gospel | Sessões em Igrejas</title>

        <meta
          name="description"
          content="Divulgação de filmes gospel e sessões especiais em igrejas."
        />
      </Helmet>
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-10">Filmes</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {filmes.map((filme, index) => (
            <Card key={index} title={filme.title} subtitle={filme.subtitle} />
          ))}
        </div>
      </section>
    </>
  );
}
