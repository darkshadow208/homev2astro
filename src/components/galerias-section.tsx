"use client"

import { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
// Reemplazo de next/image por img estándar para compatibilidad con Astro

export function GaleriasSection() {
  const api = useRef<CarouselApi | undefined>(undefined)

  useEffect(() => {
    if (!api.current) return

    const interval = setInterval(() => {
      api.current?.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const setApi = (carouselApi: CarouselApi) => {
    api.current = carouselApi
  }

  const galleries = [
    {
      image: "/quinceanera-red-dress-white-horse.jpg",
      label: "Fiesta de 15 años",
    },
    {
      image: "/celebration-sparklers-party.jpg",
      label: "Celebraciones",
    },
    {
      image: "/wedding-couple-floral-arch.jpg",
      label: "Event & Wedding Planner",
    },
  ]

  const duplicatedGalleries = [...galleries, ...galleries, ...galleries]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-teal-600">Galerías</span> <span className="text-white">de Experiencias</span>
        </h2>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: false, // Permitir deslizamiento infinito
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedGalleries.map((gallery, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="relative">
                    <div className="relative w-[280px] h-[415px] rounded-2xl overflow-hidden mx-auto">
                      <img
                        src={gallery.image || "/placeholder.svg"}
                        alt={gallery.label || `Gallery image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      {gallery.label && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                            <p className="text-white text-sm font-medium text-center">{gallery.label}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 lg:-left-8 w-12 h-12 bg-white/90 hover:bg-white border-0" />
            <CarouselNext className="right-2 md:right-4 lg:-right-8 w-12 h-12 bg-white/90 hover:bg-white border-0" />
          </Carousel>
        </div>

        {/* Ver más button */}
        <div className="flex justify-center mt-8">
          <div className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-full cursor-pointer transition-colors">
            Ver más
          </div>
        </div>
      </div>
    </section>
  )
}
