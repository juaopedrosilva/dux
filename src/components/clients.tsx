"use client";
import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

export function Clients() {
  return (
    <section className="mt-20 w-full px-4 max-w-6xl mx-auto text-center pb-16" id="clientes">
      <div className="mb-12 max-w-2xl mx-auto">
        <h3 className="text-balance font-display text-3xl font-semibold text-brand">
          Junte-se a Grandes Empresas que Confiam em Nós
        </h3>
        <p className="mt-4 text-lg text-neutral-500">
          Parcerias de sucesso que impulsionam inovação e crescimento.
        </p>
      </div>

      <InfiniteSlider gap={4} reverse>
        {[
          { src: "/alpargatas-logo.svg", alt: "Alpargatas logo" },
          { src: "/gol.png", alt: "GOL logo" },
          { src: "/fiat.svg", alt: "Fiat logo" },
          { src: "/volkswagen.svg", alt: "Volkswagen logo" },
          { src: "/orvalho.png", alt: "Orvalho logo" },
        ].map((logo, index) => (
          <div
            key={index}
            className="relative h-[50px] sm:h-[60px] md:h-[75px] w-full max-w-[180px] mx-auto aspect-[3/1]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
              priority={index === 0}
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}
