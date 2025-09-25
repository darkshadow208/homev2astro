"use client"

import { useEffect, useRef } from "react"
// Reemplazo de next/image por img estándar para compatibilidad con Astro
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Heart } from "lucide-react"

export function PlannersSection() {
  const api = useRef<CarouselApi | undefined>(undefined)

  useEffect(() => {
    if (!api.current) return

    const interval = setInterval(() => {
      api.current?.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const planners = [
    {
      id: 1,
      image: "/uploads/Tu-San-Agustin-Home_planner1.webp",
      alt: "Planner mujer rubia",
    },
    {
      id: 2,
      image: "/uploads/Tu-San-Agustin-Home_planner2.webp",
      alt: "Planner hombre traje",
    },
    {
      id: 3,
      image: "/uploads/Tu-San-Agustin-Home_planner3.webp",
      alt: "Planner hombre joven",
    },
  ]

  const duplicatedPlanners = [...planners, ...planners, ...planners]

  const categories = ["Event", "Wedding", "15 años", "Honney moon", "Business"]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-gray-600">Conoce a nuestros </span>
            <span className="text-teal-600">Planners</span>
          </h2>
        </div>

        {/* Planners Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: false, // Permitir deslizamiento infinito
            }}
            className="w-full max-w-5xl mx-auto"
            setApi={(carouselApi) => {
              api.current = carouselApi
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedPlanners.map((planner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center">
                    {/* Circular Image with Teal Border */}
                    <div className="relative mb-4">
                      <div className="w-48 h-48 rounded-full border-4 border-teal-400 overflow-hidden">
                        <img
                          src={planner.image || "/placeholder.svg"}
                          alt={planner.alt}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Heart Icon */}
                    <div className="mb-4">
                      <Heart className="w-6 h-6 text-gray-600 fill-gray-600" />
                    </div>

                    {/* Vertical Line */}
                    <div className="w-px h-8 bg-teal-400 mb-4"></div>

                    {/* Ver más Button */}
                    <div className="bgbuttom hover:bg-teal-500 text-white font-medium px-6 py-2 rounded-full cursor-pointer transition-colors">
                      Ver más
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="left-2 md:left-4 lg:-left-8 bg-white border-gray-300 hover:bg-gray-50 w-12 h-12" />
            <CarouselNext className="right-2 md:right-4 lg:-right-8 bg-white border-gray-300 hover:bg-gray-50 w-12 h-12" />
          </Carousel>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="btnplanners"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
