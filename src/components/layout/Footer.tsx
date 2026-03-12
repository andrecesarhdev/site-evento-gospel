import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="font-semibold mb-2">Gospel Events</h3>
          <p className="text-sm text-neutral-400">
            Produção de eventos, shows e divulgação de filmes gospel.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link to="/">Home</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/artistas">Artistas</Link>
        </div>

        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Gospel Events
        </div>

      </div>
    </footer>
  )
}