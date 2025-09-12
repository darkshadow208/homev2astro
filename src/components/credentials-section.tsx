export default function CredentialsSection() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center text-center text-white">
          {/* Calificación anual */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">Calificación anual</h3>
            <div className="text-6xl font-bold">4.7</div>
            {/* Pie chart */}
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeDasharray="15, 85"
                />
              </svg>
            </div>
            {/* Stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Registro Nacional de Turismo */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">
              Registro Nacional
              <br />
              de Turismo
            </h3>
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <div className="relative">
                {/* Colombia Tourism Logo Recreation */}
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">CO</span>
                  </div>
                </div>
                <div className="text-center mt-1">
                  <span className="text-xs font-bold text-gray-800">COLOMBIA</span>
                </div>
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
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800 leading-tight">
                      CÁMARA DE
                      <br />
                      COMERCIO
                      <br />
                      DE MEDELLÍN
                      <br />
                      PARA ANTIOQUIA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reconocimiento */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium text-gray-300">Reconocimiento</h3>
            <div className="text-center">
              <div className="text-6xl font-bold">38</div>
              <div className="text-2xl font-medium">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
