import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";
import { events } from "../data/events"

export default function Eventos() {


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
          {events.map((evento, index) => (
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
