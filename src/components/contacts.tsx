"use client";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contacts() {
  return (
    <section className="mt-20">
      <div className="w-full container mt-12 mx-auto sm:p-0 p-4" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Entre em Contato */}
          <div>
            <h2 className="text-2xl font-semibold text-brand mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-6">
              Valorizamos cada cliente e temos orgulho que 95% dos clientes
              voltam a trabalhar conosco.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5" />
              <span className="text-gray-700">(11) 99631-3648</span>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Mail className="h-5 w-5" />
              <span className="text-gray-700">comercial@consultoriadux.com.br</span>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Encontre-nos no Mapa
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 text-sm">
                  Avenida Paulista, 1471 - 5ºAndar - Jardim Paulista - São Paulo
                  - SP
                </span>
              </div>
              <div className="rounded-md overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.160730004!2d-46.65846432363198!3d-23.562670161642277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c92a3b5939%3A0xd80224e64ad3f154!2sAv.%20Paulista%2C%201471%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-927!5e0!3m2!1spt-PT!2sbr!4v1741960491008!5m2!1spt-PT!2sbr"
                  className="w-full sm:w-[600px] sm:h-[450px] h-64"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Formulário de Contato */}
          <div>
            <h2 className="text-2xl font-semibold text-brand mb-4">
              Envie-nos uma mensagem
            </h2>
            <p className="text-gray-600 mb-6">
              Estamos sempre em busca de projetos interessantes.
            </p>

            <form className="space-y-4 bg-gray-50 p-6 rounded-md">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem"
                  className="w-full"
                />
              </div>

              <div className="pt-2">
                <Button className="bg-brand w-full sm:w-auto">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
