import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="text-lg font-semibold tracking-wide">
          <span className="text-amber-600">Paulo Ivo</span> <br />
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/artistas">Artistas</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/eventos" onClick={() => setOpen(false)}>Eventos</Link>
          <Link to="/artistas" onClick={() => setOpen(false)}>Artistas</Link>
          <Link to="/filmes" onClick={() => setOpen(false)}>Filmes</Link>
          <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </nav>
      )}
    </header>
  )
}