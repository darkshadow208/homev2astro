import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faPinterestP,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";








export function Header() {
 
 const [lang, setLang] = useState<"ES" | "EN">("ES");

  const toggleLang = () => {
    setLang((prev) => (prev === "ES" ? "EN" : "ES"));
  };
 
 
  return (
   <header className="bg-teal-500 text-white py-4" id="header">
  <div className="h-12 px-4">
    <div className="max-w-7xl mx-auto h-full flex items-center justify-center gap-x-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="uploads/Tu-San-Agustin_Logo.webp"
          alt="San Agustín"
          className="h-7 w-auto"
        />
      </div>

      {/* Teléfono */}
      <div className="hidden sm:flex items-center gap-2 text-[17.5px]">
        <span className="font-medium">Llámanos:</span>
        <FontAwesomeIcon icon={faPhone} className="text-[16px]" />
        <span className="">
          (+57) 316 875 33 05
        </span>
      </div>

      {/* Íconos sociales + bandera TODO JUNTO */}
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faFacebookF} className="text-[18px] hover:opacity-90 cursor-pointer" />
        <FontAwesomeIcon icon={faInstagram} className="text-[18px] hover:opacity-90 cursor-pointer" />
        <FontAwesomeIcon icon={faTiktok} className="text-[18px] hover:opacity-90 cursor-pointer" />
        <FontAwesomeIcon icon={faPinterestP} className="text-[18px] hover:opacity-90 cursor-pointer" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-[18px] hover:opacity-90 cursor-pointer" />
        <FontAwesomeIcon icon={faYoutube} className="text-[18px] hover:opacity-90 cursor-pointer" />

        {/* Placeholders */}
       

        {/* WhatsApp */}
        <span className="inline-flex items-center justify-center w-7 h-7 ">
          <FontAwesomeIcon icon={faWhatsapp} className="text-[16px]" />
        </span>

        {/* Bandera */}
         <button
            onClick={toggleLang}
            className="flex items-center gap-2 focus:outline-none"
          >
            {lang === "ES" ? (
              // Bandera Colombia
              <div className="w-7 h-7 rounded-full overflow-hidden flex flex-col ring-2 ring-white/70">
                <div className="flex-1 bg-yellow-400" />
                <div className="flex-1 bg-blue-600" />
                <div className="flex-1 bg-red-600" />
              </div>
            ) : (
              // Bandera Estados Unidos
              <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/70">
                <div className="w-full h-1/2 bg-blue-700 relative flex flex-wrap">
                  {/* Estrellas blancas */}
                  <div className="w-full flex flex-wrap text-[6px] text-white leading-none">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
                <div className="w-full h-1/2">
                  <div className="h-1 bg-red-600" />
                  <div className="h-1 bg-white" />
                  <div className="h-1 bg-red-600" />
                  <div className="h-1 bg-white" />
                </div>
              </div>
            )}

            <span className="text-sm font-semibold">
              {lang === "ES" ? "ES" : "EN"}
            </span>
          </button>
      </div>
    </div>
  </div>
</header>

  );
}

