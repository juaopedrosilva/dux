"use client"; 
import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

export function Clients() {

  return (
    <section className="mt-20">
      <div className="mx-auto w-full max-w-xl px-4 text-center">
        <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
          Junte-se a Grandes Empresas que Confiam em Nós
        </h3>
        <p className="mt-3 text-pretty text-lg text-neutral-500">
          Parcerias de sucesso que impulsionam inovação e crescimento.
        </p>
      </div>
      <div className="w-full max-w-screen-lg mt-12 mx-auto flex justify-center sm:justify-around sm:flex-row flex-col">
        <InfiniteSlider gap={32} reverse>
          <Image src="/fiat-3.svg" alt="Apple Music logo" height={120} width={120} />
          <Image src="/gol.png" alt="Chrome logo" height={120} width={120} />
          <Image src="/alpargatas-logo.svg" alt="Strava logo" height={120} width={120} />
          <Image src="/Rede_Bandeirantes_logo_2011.svg.png" alt="Strava logo" height={120} width={120} /> 
        </InfiniteSlider>
      </div>
    </section>
  );
}
