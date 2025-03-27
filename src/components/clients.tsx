"use client";
import Image from "next/image";
// import { Button } from "./ui/button";

export function Clients() {
  return (
    <section className="mt-16 px-4" id='clientes'>
      <div className="w-full container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-balance font-display text-3xl font-semibold text-brand text-center md:text-left">
            Junte-se a Grandes Empresas que Confiam em Nós
          </h3>
          <p className="mt-3 text-pretty text-lg text-neutral-500 text-center md:text-left">
            Parcerias de sucesso que impulsionam inovação e crescimento.
          </p>
          <div className="flex justify-center md:justify-start">
            {/* <Button variant="whatsapp" className="mt-5">Fale com um Especialista</Button> */}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
          <Image src="/fiat-3.svg" alt="Fiat logo" height={100} width={100} />
          <Image src="/gol.png" alt="Gol logo" height={100} width={100} />
          <Image src="/alpargatas-logo.svg" alt="Alpargatas logo" height={100} width={100} />
          <Image src="/Rede_Bandeirantes_logo_2011.svg.png" alt="Rede Bandeirantes logo" height={100} width={100} />
        </div>
      </div>
    </section>
  );
}