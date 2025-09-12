"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function HeroSection() {
  const slides = [
    {
      image: "/elegant-quincea-era-in-red-dress-with-white-horse-.jpg",
      alt: "Quinceañera celebration with elegant red dress and romantic carriage setting",
    },
    {
      image: "/beautiful-quincea-era-party-setup-with-pink-decora.jpg",
      alt: "Elegant quinceañera party venue with pink decorations",
    },
    {
      image: "/quincea-era-celebration-with-blue-dress-in-garden-.jpg",
      alt: "Quinceañera in blue dress in beautiful garden setting",
    },
  ]

  return (
    <div className="relative overflow-hidden -mb-1">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[663.781px] max-w-[1861px] mx-auto">
                <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white pointer-events-none">
                  <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance">
                      Fiesta de 15 años
                    </h1>

                    <div className="mb-6 md:mb-8 flex justify-center">
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium pointer-events-auto">
                        Agenda una asesoría con Expertos
                      </Button>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full p-2 w-full max-w-sm md:max-w-md pointer-events-auto">
                        <Input
                          placeholder="Buscar por nombre o categoría"
                          className="border-none bg-transparent text-gray-700 placeholder:text-gray-500 flex-1 px-4 text-sm md:text-base h-10"
                        />
                        <Button className="bg-teal-600 hover:bg-teal-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium">
                          BUSCAR
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600/90 hover:bg-teal-600 text-white border-none hover:scale-110 transition-all duration-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600/90 hover:bg-teal-600 text-white border-none hover:scale-110 transition-all duration-200" />
      </Carousel>
    </div>
  )
}
