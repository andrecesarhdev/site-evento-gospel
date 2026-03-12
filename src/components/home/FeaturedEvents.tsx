import Card from "../ui/Card"

import { events } from "../../data/events"
export default function FeaturedEvents() {



  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12">
          Eventos recentes
        </h2>

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

      </div>

    </section>
  )
}