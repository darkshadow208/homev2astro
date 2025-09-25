import { Check } from "lucide-react"

export default function CredentialsSection() {
  return (
    <section className="--background py-16">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center text-center text-white">
          {/* Calificación anual */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">Calificación anual</h3>

            {/* Pie chart */}
           
             <img
             id="imgcalificacion"
                src="/uploads/calificacion_anual.webp"
                alt="Destinos nacionales e internacionales"
                className="w-full h-full object-cover "
                width={192}
                  height={192}
              />
           
            {/* Stars */}
            <div className="flex space-x-1">
             
            </div>
          </div>

          {/* Registro Nacional de Turismo */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">
              Registro Nacional
              <br />
              de Turismo
            </h3>
            <div className=" rounded-lg flex items-center justify-center">
              <div className="relative">
                {/* Colombia Tourism Logo Recreation */}
              
               
                <img src="/uploads/registro_nacional_de_turismo.webp" alt="" />
            
                
              </div>
            </div>
          </div>

          {/* Acreditación Mercantil */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">
              Acreditación
              <br />
              Mercantil
            </h3>
            <div className="w-43 h-30 ">
              <div className="text-center">
                <div className="">
                  <div className="text-center">
                                    <img src="/uploads/acreditacion_mercantil.webp" alt="" />

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reconocimiento */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">Reconocimiento</h3>
            <div className="text-center">
                                                  <img src="/uploads/38_anos.webp" alt="" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
