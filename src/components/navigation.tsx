"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const navItems = ["Inicio", "Eventos", "Servicios", "Lugares", "Historias", "Blog", "Nosotros"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm py-8 px-4 relative z-30 " >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8" id="navbar">
            {navItems.map((item) => (
              <a key={item} href="#" className=" hover:text-gray-900 transition-colors ">
                {item}
              </a>
            ))}
          
          <a class="nav-link btn-contacto" href="https://api.whatsapp.com/send/?phone=573168753305&amp;text=Hola%21&amp;type=phone_number&amp;app_absent=0">Contacto</a>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
              <Menu />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4">
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)} className="mb-4">
              <X />
            </Button>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href="#" className="hover:text-gray-900 transition-colors ">
                  {item}
                </a>
              ))}
              <Button variant="default" className="mt-4">
                Contacto
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
