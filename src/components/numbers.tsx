"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./ui/animated-number";

export function Numbers() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    setValue1(150);
    setValue2(200);
    setValue3 (15);
  }, []);

  return (
    <section className="mt-20">
      <div className="mx-auto w-full max-w-xl px-4 text-center">
        <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
          Nossos Resultados Falam Por Si
        </h3>
        <p className="mt-3 text-pretty text-lg text-neutral-500">
          Empresas que confiaram na nossa consultoria alcançaram mais
          eficiência, reduziram custos e aumentaram sua lucratividade. Veja os
          números que comprovam o impacto da nossa atuação!
        </p>
      </div>
      <div className="w-full max-w-screen-lg mt-6 mx-auto flex justify-center sm:justify-around sm:flex-row flex-col">
        <div className="">
          <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
            +
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value1}
            />
          </h3>
          <p className="mt-1 text-pretty text-lg text-neutral-500">
            cases de sucesso
          </p>
        </div>
        <div className="">
          <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
            +
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value2}
            />
          </h3>
          <p className="mt-1 text-pretty text-lg text-neutral-500">
            depoimentos
          </p>
        </div>
        <div className="">
          <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value3}
            />
          </h3>
          <p className="mt-1 text-pretty text-lg text-neutral-500">
            anos de existência
          </p>
        </div>
      </div>
    </section>
  );
}
