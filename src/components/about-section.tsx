"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const awards = [
    {
      id: 1,
      title: "AWARD",
      subtitle: "2024",
      outerColor: "bg-yellow-600",
      innerColor: "bg-yellow-700",
    },
    {
      id: 2,
      title: "CERT",
      subtitle: "ISO",
      outerColor: "bg-teal-600",
      innerColor: "bg-teal-700",
    },
    {
      id: 3,
      title: "QUALITY",
      subtitle: "2023",
      outerColor: "bg-blue-600",
      innerColor: "bg-blue-700",
    },
    {
      id: 4,
      title: "EXCELLENCE",
      subtitle: "2024",
      outerColor: "bg-purple-600",
      innerColor: "bg-purple-700",
    },
    {
      id: 5,
      title: "TRUST",
      subtitle: "SEAL",
      outerColor: "bg-green-600",
      innerColor: "bg-green-700",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(awards.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(awards.length / 2)) % Math.ceil(awards.length / 2))
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About Us */}
          <div className="space-y-6">
            {/* San Agustín Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-teal-500 text-white px-8 py-3 rounded-full">
                <span className="text-2xl font-bold italic">San Agustín</span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-teal-500">Conócenos</span>
                <br />
                <span className="text-gray-700">¿Quienes somos?</span>
              </h2>
            </div>

            {/* Description */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                Somos Tu San Agustín, la empresa líder en operación de eventos. Con más de 35 años, ofrecemos soluciones
                integrales y personalizadas para cualquier tipo de evento.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg">
                Ver más
              </Button>
            </div>
          </div>

          {/* Right side - Awards and Certifications */}
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl text-gray-600 mb-2">Premios Y</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-700">Y certificaciones</h2>
            </div>

            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(awards.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="flex justify-center lg:justify-start gap-8">
                        {awards.slice(slideIndex * 2, slideIndex * 2 + 2).map((award) => (
                          <div
                            key={award.id}
                            className={`w-24 h-24 ${award.outerColor} rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <div
                              className={`w-20 h-20 ${award.innerColor} rounded-full flex items-center justify-center`}
                            >
                              <div className="text-white text-xs font-bold text-center">
                                <div>{award.title}</div>
                                <div>{award.subtitle}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
                  aria-label="Previous awards"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
                  aria-label="Next awards"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center lg:justify-start gap-2 mt-4">
                {Array.from({ length: Math.ceil(awards.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-teal-500" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
