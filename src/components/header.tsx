import { Phone, Facebook, Instagram, Music, MapPin, Linkedin, Youtube, Plus, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <div className="bg-teal-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
        <div className="flex items-center gap-2 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold text-xs md:text-sm italic">Bella</span>
            </div>
          </div>

          {/* Phone - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <span>Llámanos:</span>
            <Phone className="w-4 h-4" />
            <span className="font-medium">(+57) 316 875 33 05</span>
          </div>

          {/* Social Icons - Reduced on mobile */}
          <div className="flex items-center gap-1 md:gap-3">
            <Facebook className="w-3 h-3 md:w-4 md:h-4 hover:opacity-80 cursor-pointer" />
            <Instagram className="w-3 h-3 md:w-4 md:h-4 hover:opacity-80 cursor-pointer" />
            <div className="hidden sm:flex items-center gap-1 md:gap-3">
              <Music className="w-4 h-4 hover:opacity-80 cursor-pointer" />
              <MapPin className="w-4 h-4 hover:opacity-80 cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:opacity-80 cursor-pointer" />
              <Youtube className="w-4 h-4 hover:opacity-80 cursor-pointer" />
              <Plus className="w-4 h-4 hover:opacity-80 cursor-pointer" />
            </div>
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 hover:opacity-80 cursor-pointer" />
          </div>

          {/* Flag and Language */}
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-5 h-3 md:w-6 md:h-4 rounded-sm overflow-hidden flex flex-col">
              <div className="w-full h-1 md:h-2 bg-yellow-400"></div>
              <div className="w-full h-1 bg-blue-600"></div>
              <div className="w-full h-1 bg-red-600"></div>
            </div>
            <span className="text-xs font-medium">ES</span>
          </div>
        </div>
      </div>
    </div>
  )
}
