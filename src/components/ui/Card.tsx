type CardProps = {
  title: string
  subtitle?: string
  image?: string
}

export default function Card({ title, subtitle, image }: CardProps) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden hover:-translate-y-1 transition duration-300">

      <div className="h-48 overflow-hidden">

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

      </div>

      <div className="p-5">

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm text-neutral-400 mt-2">
            {subtitle}
          </p>
        )}

      </div>

    </div>
  )
}