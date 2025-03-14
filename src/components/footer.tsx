"use client";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-lg mt-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Dux
            </Link>
            <span className="ml-4 text-sm text-gray-500">
              © 2025 Dux Consulting. Todos os direitos reservados.
            </span>
          </div>
          <nav className="flex flex-wrap gap-6">
            <ul
              data-orientation="horizontal"
              className="group relative z-0 flex"
              dir="ltr"
            >
              <Button variant="whatsapp">Fale com um Especialista</Button>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-500 max-w-2xl mb-4 md:mb-0">
            Ajudamos negócios a crescerem de forma sustentável, otimizando
            processos e maximizando resultados.
          </p>
          <div className="flex gap-4">
            <Link href="http://instagram.com/consulturiadux"  target='_blank' aria-label="Twitter">
              <Instagram className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </Link> 
          </div>
        </div>
      </div>
    </footer>
  );
}
