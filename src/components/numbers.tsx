"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./ui/animated-number";

export function Numbers() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    setValue1(3);
    setValue2(12);
    setValue3(150);
    setValue4(200);
  }, []);

  return (
    <section className="mt-20 w-full px-4 max-w-6xl mx-auto text-center">
      <div className="mb-12 max-w-2xl mx-auto">
      <h3 className="text-balance font-display text-3xl font-semibold  text-brand">
          Nossos Resultados Falam Por Si
        </h3>
        <p className="mt-4 text-lg text-neutral-500">
        Empresas que confiaram na nossa consultoria alcançaram mais
        eficiência.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {[
          { value: value1, label: "Países" },
          { value: value2, label: "Estados" },
          { value: value3, label: "Clientes", prefix: "+" },
          { value: value4, label: "Projetos", prefix: "+" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl font-semibold text-neutral-900">
              {item.prefix || ""}
              <AnimatedNumber
                springOptions={{ bounce: 0, duration: 2000 }}
                value={item.value}
              />
            </h3>
            <p className="mt-2 text-lg text-neutral-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
