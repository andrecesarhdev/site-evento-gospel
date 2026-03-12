import { Helmet } from "react-helmet-async";
import evento1 from "../assets/images/evento1.jpg";
import evento2 from "../assets/images/evento2.jpg";
import evento3 from "../assets/images/evento3.jpg";
import Card from "../components/ui/Card";

export default function Eventos() {
  const eventos = [
    {
      title: "Noite de Louvor",
      subtitle: "São Paulo - Março 2024",
      image: evento1,
    },
    {
      title: "Festival Gospel",
      subtitle: "Rio de Janeiro",
      image: evento2,
    },
    {
      title: "Congresso de Jovens",
      subtitle: "Curitiba",
      image: evento3,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Eventos Gospel | Shows e Congressos</title>

        <meta
          name="description"
          content="Eventos gospel realizados em igrejas com cantores e bandas cristãs."
        />
      </Helmet>
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-10">Eventos</h1>

        <div className="grid gap-8 md:grid-cols-3">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              title={evento.title}
              subtitle={evento.subtitle}
              image={evento.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
