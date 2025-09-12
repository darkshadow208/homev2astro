"use client"

import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function LocacionesSection() {
  const api = useRef<CarouselApi | undefined>(undefined)

  useEffect(() => {
    if (!api.current) return

    const interval = setInterval(() => {
      api.current?.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const locaciones = [
    {
      nombre: "Medellín",
      imagen: "/elegant-outdoor-event-venue-in-medellin-with-golde.jpg",
      enlace: "Ver ciudades",
    },
    {
      nombre: "Rionegro",
      imagen: "/elegant-indoor-venue-in-rionegro-with-wooden-ceili.jpg",
      enlace: "Ver todos los destinos",
    },
    {
      nombre: "Envigado",
      imagen: "/envigado-venue-elegant.png",
      enlace: "Ver países",
    },
  ]

  const duplicatedLocaciones = [...locaciones, ...locaciones, ...locaciones]

  return (
    <section className="bg-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-teal-400">Locaciones</span> <span className="text-white">para tus eventos</span>
          </h2>
        </div>

        <div className="mb-12 px-4 md:px-8 lg:px-12">
          <Carousel
            setApi={(carouselApi) => {
              api.current = carouselApi
            }}
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
              {duplicatedLocaciones.map((locacion, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="flex flex-col items-center">
                    <Card className="overflow-hidden border-0 shadow-lg mb-4 w-full max-w-xs bg-transparent">
                      <div className="relative">
                        <img
                          src={locacion.imagen || "/placeholder.svg"}
                          alt={`Venue en ${locacion.nombre}`}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm rounded-b-lg">
                          <div className="px-6 py-4">
                            <h3 className="text-white text-xl font-bold tracking-wide text-center">
                              {locacion.nombre}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Enlace debajo de cada tarjeta */}
                    <button className="text-white hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                      <span className="text-sm font-medium underline decoration-1 underline-offset-2">
                        {locacion.enlace}
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-teal-600 hover:bg-teal-700 text-white border-0 left-2 md:left-4 lg:-left-8 h-12 w-12" />
            <CarouselNext className="bg-teal-600 hover:bg-teal-700 text-white border-0 right-2 md:right-4 lg:-right-8 h-12 w-12" />
          </Carousel>
        </div>

        {/* Botón central */}
        <div className="flex justify-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200">
            Quiero Reservar
          </Button>
        </div>
      </div>
    </section>
  )
}
