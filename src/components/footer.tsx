import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faPinterest,
  faYoutube,
  faLinkedin,
  // faTiktok,   // ← añade estos dos SOLO si tu paquete está actualizado
  // faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="text-white" id="bgfooter">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Logo + redes */}
          <div className="space-y-6">
            <div className="px-6 py-3 inline-block">
              <img src="uploads/Tu-San-Agustin_Logo_verde-300x156.webp" alt="San Agustín" />
            </div>
            <p className="text-gray-300 tpfo">Síguenos @tusanagustin</p>
            <div className="flex flex-wrap gap-3">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <FontAwesomeIcon icon={faPinterest} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              {/* <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" /> */}
              <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              {/* <FontAwesomeIcon icon={faFlickr} className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" /> */}
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <ul className="space-y-2">
              {["Inicio","Eventos","Servicios","Galerías","Lugares","Planners","Artistas","Historias","Blogs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-teal-400">• {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <ul className="space-y-2">
              {[
                "Contáctanos",
                "Sobre nosotros",
                "Preguntas frecuentes",
                "Condiciones legales",
                "Políticas de privacidad",
                "Consentimiento de cookies",
                "Mapa del sitio",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-teal-400">• {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trabaja con nosotros */}
          <div className="space-y-4">
            <ul className="space-y-2">
              {[
                "¡Trabaja con nosotros!",
                "Events & Wedding Planners",
                "Artistas y espectáculos",
                "Lugares para Eventos",
                "Proveedores",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-teal-400">• {item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contacto + medios de pago */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-12 pt-8">
          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-lg">Contáctanos</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">(+57) 316 875 33 05</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">contacto@tusanagustin.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-lg">Medios de pago</h3>
            <div className="flex flex-wrap items-center gap-6">
              <img className="h-8 object-contain" src="uploads/Tu-San-Agustin_Home_medios-de-pago-_08.webp" alt="Visa" />
              <img className="h-8 object-contain" src="uploads/Tu-San-Agustin_Home_medios-de-pago-_07.webp" alt="MasterCard" />
              <img className="h-8 object-contain" src="uploads/Tu-San-Agustin_Home_medios-de-pago-_09.webp" alt="PayPal" />
              <img className="h-8 object-contain" src="uploads/Tu-San-Agustin_Home_medios-de-pago-_10.webp" alt="PSE" />
              <img className="h-8 object-contain" src="uploads/Tu-San-Agustin_Home_medios-de-pago-_11.webp" alt="Wompi" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4" id="bgcopy">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm">Copyright © 1988 - 2025 Tu San Agustín</p>
        </div>
      </div>
    </footer>
  );
}
