import { Helmet } from "react-helmet-async";
import CTA from "../components/home/CTA";
import FeaturedEvents from "../components/home/FeaturedEvents";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";

export default function Home() {
  return (
    <>
          <Helmet>
        <title>Eventos Gospel | Shows e Filmes para Igrejas</title>

        <meta
          name="description"
          content="Produção de shows gospel, eventos cristãos e sessões de filmes gospel em igrejas."
        />
      </Helmet>
      <Hero />
      <Services />
      <FeaturedEvents />
      <CTA />
    </>
  )
}