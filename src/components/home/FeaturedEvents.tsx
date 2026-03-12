export default function FeaturedEvents() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12">
          Eventos recentes
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-neutral-800"></div>

            <div className="p-6">
              <h3 className="font-semibold">
                Noite de Louvor
              </h3>

              <p className="text-sm text-neutral-400 mt-2">
                São Paulo - 2024
              </p>
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-neutral-800"></div>

            <div className="p-6">
              <h3 className="font-semibold">
                Festival Gospel
              </h3>

              <p className="text-sm text-neutral-400 mt-2">
                Rio de Janeiro
              </p>
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-neutral-800"></div>

            <div className="p-6">
              <h3 className="font-semibold">
                Sessão de Filme Cristão
              </h3>

              <p className="text-sm text-neutral-400 mt-2">
                Curitiba
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}