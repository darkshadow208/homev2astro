"use client"

import { Card } from "@/components/ui/card"

export function HistoriasSection() {
  const stories = [
    {
      id: 1,
      image: "/laura-andres-wedding-story.jpg",
      title: "Laura & Andrés Boda",
      category: "Matrimonios",
      description:
        "Laura & Andrés una historia de amor realizada en nuestro lugar para Eventos Freebad, en esta historia se refleja la felicidad y pasión de una pareja que nos cautivó pues en cada fotografía se capturan momentos que sin duda serán recordados para toda la vida.",
    },
    {
      id: 2,
      image: "/mariam-quinceanera-golden-dress.jpg",
      title: "Fiesta de 15 Años Mariam",
      category: "Fiesta de 15 años",
      description:
        "Fiesta de 15 años realizada en nuestro sitio Finca Forest en Envigado, ideal para realizar fiestas y celebraciones llenas de magia y diversión, cuenta con este maravilloso lugar y el mejor servicio de San Agustín .",
    },
    {
      id: 3,
      image: "/mitsubishi-corporate-event-celebration.jpg",
      title: "Mitsubishi",
      category: "Eventos Empresariales",
      description:
        "Realizamos la celebración de los 50 años de Mitsubishi, un evento empresarial en el que ofrecimos un servicio integral en la operación y logística en nuestro lugar para eventos Orquiderama Jardín Botánico.",
    },
  ]

  return (
    <section
      className="py-16 px-4 relative"
      style={{
        backgroundImage: "url('/historias-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-stone-200/80"></div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif">
            <span className="text-teal-600">Historias</span> <span className="text-gray-800">de Eventos Reales</span>
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="relative">
                {/* Circular Image - positioned to overlap card */}
                <div className="flex justify-center mb-[-50px] relative z-20">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card */}
                <Card className="bg-white rounded-3xl p-6 pt-20 shadow-lg max-w-sm w-full mb-4 relative z-10">
                  {/* Story Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">{story.description}</p>

                  {/* Story Title */}
                  <h3 className="text-teal-600 text-lg font-medium text-center mb-6">{story.title}</h3>

                  {/* Ver más Button */}
                  <div className="flex justify-center">
                    <button className="bg-teal-400 hover:bg-teal-500 text-black font-medium px-6 py-2 rounded-full transition-colors">
                      Ver más
                    </button>
                  </div>
                </Card>
              </div>

              {/* Category Link */}
              <div className="text-gray-600 text-sm">
                {story.category} <span className="ml-1">›</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
            Ver testimonios
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}