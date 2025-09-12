"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const originalArtists = [
  {
    name: "Maluma",
    image: "/maluma-singing-with-microphone-tattoos.jpg",
  },
  {
    name: "Karol G",
    image: "/karol-g-red-pink-hair-singing-microphone.jpg",
  },
  {
    name: "J Balvin",
    image: "/j-balvin-bald-white-outfit-singing-microphone.jpg",
  },
]

const artists = [...originalArtists, ...originalArtists, ...originalArtists]

const categories = ["Cantantes", "Imitadores", "Orquestas", "Grupos", "Fotografía y Video", "Música popular", "Shows"]

export function ArtistasSection() {
  const api = useRef<CarouselApi | undefined>(undefined)

  useEffect(() => {
    if (!api.current) return

    const interval = setInterval(() => {
      api.current?.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-teal-400">Artistas</span> <span className="text-white italic">&</span>{" "}
            <span className="text-white">Espectáculos</span>
          </h2>
        </div>

        {/* Artists Carousel */}
        <div className="mb-16">
          <Carousel
            setApi={(carouselApi) => {
              api.current = carouselApi
            }}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              containScroll: false,
              skipSnaps: false,
              dragFree: false,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {artists.map((artist, index) => (
                <CarouselItem
                  key={`${artist.name}-${index}`}
                  className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/3"
                >
                  <div className="flex flex-col items-center space-y-4">
                    {/* Circular Image */}
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-600">
                        <img
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Artist Name */}
                    <h3 className="text-teal-400 text-xl font-medium">{artist.name}</h3>

                    {/* Ver más Button */}
                    <div
                      className="bg-teal-600 text-white font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-teal-700 transition-colors inline-block"
                      role="button"
                      tabIndex={0}
                    >
                      Ver más
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="left-2 md:left-4 lg:-left-8 bg-white hover:bg-gray-100 text-gray-800 border-0 w-12 h-12 shadow-lg" />
            <CarouselNext className="right-2 md:right-4 lg:-right-8 bg-white hover:bg-gray-100 text-gray-800 border-0 w-12 h-12 shadow-lg" />
          </Carousel>
        </div>

        {/* Categories */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 text-white">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-lg md:text-xl font-light italic cursor-pointer hover:text-teal-400 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-600 pb-8 mb-12"></div>

        {/* Bottom Button */}
        <div className="text-center px-4">
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-800 border-white px-4 md:px-8 py-3 rounded-full text-sm md:text-lg font-medium w-full max-w-md mx-auto"
          >
            Ingresa a la sección de Artistas y Espectáculos
          </Button>
        </div>
      </div>
    </section>
  )
}
