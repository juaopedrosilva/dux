"use client";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contacts() {
  return (
    <section className="w-full bg-white py-24 ">
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 gap-12 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div>
          <h3 className="text-balance font-display text-3xl font-semibold text-brand text-center md:text-left">
            Entre em contato com a gente!
          </h3>
          <p className="text-gray-600 mb-6 mt-3">
            Valorizamos cada cliente e temos orgulho que 95% dos clientes
            voltam a trabalhar conosco.
          </p>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3 ">
              <Phone className="h-5 w-5" />
              <span className="text-gray-700">(11) 99631-3648</span>
            </div>

            <div className="flex items-center gap-3 ">
              <Mail className="h-5 w-5" />
              <span className="text-gray-700">comercial@consultoriadux.com.br</span>
            </div>
            <div className="flex items-center gap-3 ">
              <MapPin className="h-5 w-5" />
              <span className="text-gray-700"> Avenida Paulista, 1471 - 5ºAndar - Jardim Paulista - São Paulo
                - SP</span>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.160730004!2d-46.65846432363198!3d-23.562670161642277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c92a3b5939%3A0xd80224e64ad3f154!2sAv.%20Paulista%2C%201471%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-927!5e0!3m2!1spt-PT!2sbr!4v1741960491008!5m2!1spt-PT!2sbr"
            className="w-full sm:w-[600px] sm:h-[450px] h-64"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
