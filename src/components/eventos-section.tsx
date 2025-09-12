"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function EventosSection() {
  const eventos = [
    {
      id: 1,
      title: "15 años",
      image: "/quincea-era-in-red-dress-with-white-horse-elegant-.jpg",
    },
    {
      id: 2,
      title: "Eventos empresariales",
      image: "/corporate-business-event-with-crowd-outdoor-profes.jpg",
    },
    {
      id: 3,
      title: "Bodas",
      image: "/romantic-wedding-couple-intimate-moment-bride-groo.jpg",
    },
  ]

  const servicios = ["Eventos Sociales", "Eventos Empresariales", "Servicios Institucionales"]

  return (
    <section className="bg-gray-900 -mt-1 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="text-teal-400">Eventos</span> <span className="text-white">únicos</span>
        </h2>

        <div className="relative mb-16">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {eventos.map((evento) => (
                <CarouselItem key={evento.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="flex flex-col items-center">
                    <Card className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] relative">
                          <img
                            src={evento.image || "/placeholder.svg"}
                            alt={evento.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">{evento.title}</h3>
                          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-full font-medium">
                            VER MÁS
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 md:left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white border-none w-12 h-12" />
            <CarouselNext className="absolute right-2 md:right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white border-none w-12 h-12" />
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {servicios.map((servicio, index) => (
            <p key={index} className="text-white text-lg md:text-xl italic font-light text-center">
              {servicio}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
