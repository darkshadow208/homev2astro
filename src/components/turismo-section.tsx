"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function TurismoSection() {
  return (
    <section className="w-full">
      <main className="w-full bg-white">
        <div className="section-content relative w-full">
          {/* GRID PRINCIPAL:
            - En desktop (lg): Grid de 3 columnas y 2 filas. Se usan clases arbitrarias de Tailwind para replicar los 300px de alto.
            - En mobile (<900px): Se convierte en un grid de 1 sola columna.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[300px_300px] gap-0">
            <article className="relative w-full h-full overflow-hidden lg:col-start-1 lg:row-start-1">
              <img
                src="/uploads/Tu-San-Agustin-Home_38.webp"
                alt="Crucero para lunas de miel"
                className="w-full h-full object-cover"
              />
              <span className="absolute left-1/2 bottom-2.5 -translate-x-1/2 bg-white/60 text-[#333638] font-['Alice'] text-base leading-[1.1rem] px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Lunas de Miel
              </span>
            </article>

            <article className="bg-[#4eac9f] text-white p-9 flex flex-col justify-center gap-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 order-first lg:order-none">
              <p className="font-['Alice'] text-lg text-[#e7fffb]">Conoce Nuestros Planes de</p>
              <h2 className="text-[3rem] leading-tight font-normal text-[#333638]">
                <Check className="inline-block h-6 w-6 mr-1" strokeWidth={3} />
                <span className="font-bold">Turismo</span>
                <br />
                <span>Especializado</span>
              </h2>
              <p className="text-base leading-relaxed text-[#e9fffb] border-l border-white pl-5">
                Descubre destinos increíbles. Lunas de miel, Excursiones de 15 años y más. Explora nuestros paquetes
                turísticos ¡Vive la aventura!
              </p>

              {/* Componente Button de shadcn/ui */}
              <Button
                variant="secondary"
                className="self-start mt-2 rounded-full !text-[#333638] font-['Alice'] !text-base !bg-white hover:!bg-gray-200 !px-4 !py-2 !h-auto"
              >
                Ver más
              </Button>
            </article>

            <article className="relative w-full h-full overflow-hidden lg:col-start-3 lg:row-start-1 lg:row-span-2 min-h-[260px] lg:min-h-0">
              <img
                src="/uploads/Tu-San-Agustin-Home_47.webp"
                alt="Destinos nacionales e internacionales"
                className="w-full h-full object-cover"
              />
              <span className="absolute left-1/2 bottom-2.5 -translate-x-1/2 bg-white/60 text-[#333638] font-['Alice'] text-base leading-[1.1rem] px-3.5 py-1.5 rounded-full text-center w-[200px]">
                Destinos nacionales e internacionales
              </span>
            </article>

            <article className="relative w-full h-full overflow-hidden lg:col-start-1 lg:row-start-2">
              <img
                src="/uploads/Tu-San-Agustin-Home_43.webp"
                alt="Excursiones de 15 años"
                className="w-full h-full object-cover"
              />
              <span className="absolute left-1/2 bottom-2.5 -translate-x-1/2 bg-white/60 text-[#333638] font-['Alice'] text-base leading-[1.1rem] px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Excursiones de 15 años
              </span>
            </article>
          </div>
        </div>
      </main>
    </section>
  )
}
