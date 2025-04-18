"use client";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-b from-neutral-50 to-white pb-10 pt-1.5">
      <div className="w-full container mt-12 mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-brand">
              Dux
            </Link>
            <span className="ml-4 text-sm text-gray-500">
              © 2025 Dux Consultoria. Todos os direitos reservados.
            </span>
          </div>
          <nav className="flex flex-wrap gap-6">
            <ul
              data-orientation="horizontal"
              className="group relative z-0 flex"
              dir="ltr"
            >
              {/* <Button variant="whatsapp">Fale com um Especialista</Button> */}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-500 max-w-2xl mb-4 md:mb-0">
            Ajudamos negócios a crescerem de forma sustentável, otimizando
            processos e maximizando resultados.
          </p>
          <div className="flex gap-4">
            <a href="tel:+5511996313648" aria-label="Telefone">
              <Phone className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </a>
            <a href="mailto:comercial@consultoriadux.com.br" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </a>
            <Link
              href="http://instagram.com/consulturiadux"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
