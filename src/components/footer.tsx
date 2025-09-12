import Link from "next/link"
import { Instagram, MessageCircle, Facebook, Youtube, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      {/* Main footer content */}
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Logo and social media */}
          <div className="space-y-6">
            <div className="bg-teal-500 rounded-full px-6 py-3 inline-block">
              <span className="text-white font-bold text-xl italic">San Agustín</span>
            </div>
            <p className="text-gray-300">Síguenos @tusanagustin</p>
            <div className="flex flex-wrap gap-3">
              <Instagram className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <MessageCircle className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <Facebook className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <div className="w-6 h-6 bg-gray-300 rounded hover:bg-teal-400 cursor-pointer"></div> {/* Pinterest */}
              <div className="w-6 h-6 bg-gray-300 rounded hover:bg-teal-400 cursor-pointer"></div> {/* TikTok */}
              <Youtube className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-teal-400 cursor-pointer" />
              <div className="w-6 h-6 bg-gray-300 rounded hover:bg-teal-400 cursor-pointer"></div> {/* Flickr */}
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Eventos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Galerías
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Lugares
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Planners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Artistas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Historias
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal and contact links */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Contáctanos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Condiciones legales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Consentimiento de cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Mapa del sitio
                </Link>
              </li>
            </ul>
          </div>

          {/* Work with us */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • ¡Trabaja con nosotros!
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Events & Wedding Planners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Artistas y espectáculos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Lugares para Eventos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400">
                  • Proveedores
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and payment methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-600">
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-lg">Contáctanos</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">(+57) 316 875 33 05</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">contacto@tusanagustin.com</span>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-lg">Medios de pago</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white rounded px-3 py-2">
                <span className="text-gray-800 font-bold text-sm">MasterCard</span>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-800 font-bold text-sm">VISA</span>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-600 font-bold text-sm">PayPal</span>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-gray-800 font-bold text-sm">PSE</span>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-teal-600 font-bold text-sm">Wompi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm">Copyright © 1988 - 2025 Tu San Agustín</p>
        </div>
      </div>
    </footer>
  )
}
