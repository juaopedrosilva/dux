"use client";
import Image from "next/image";
// import { Button } from "./ui/button";

export function Clients() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-balance font-display text-3xl font-semibold text-brand text-center md:text-left">
              Junte-se a Grandes Empresas que Confiam em Nós
            </h3>
            <p className="text-lg text-gray-600">
              Parcerias de sucesso que impulsionam inovação e crescimento.
            </p>

          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="Tuple"
                  width={128}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="Reform"
                  width={128}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="SavvyCal"
                  width={128}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="Laravel"
                  width={128}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="Transistor"
                  width={128}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 relative">
                <Image
                  src="/gol.png"
                  alt="Statamic"
                  width={128}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}