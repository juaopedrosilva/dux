"use client";
import { useState } from "react";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { FinanceSvg } from "@/assets/finance-svg";
import { PricesSvg } from "@/assets/prices-svg";

export function Features() {
  const items = [
    {
      image: <FinanceSvg className="w-full max-w-[300px] h-auto mx-auto" />,
      reverse: false,
      title: "Processos",
      description:
        "Otimização e padronização de processos, integração ao ERP, definição de KPIs e metas, análise SWOT e melhoria dos controles internos.",
    },
    {
      image: <FinanceSvg className="w-full max-w-[300px] h-auto mx-auto" />,
      reverse: true,
      title: "Financeiro",
      description:
        "Gestão financeira eficiente com análise de DRE, fluxo de caixa, projeção de resultados e identificação de oportunidades de ganhos e reduções.",
    },
    {
      image: <PricesSvg className="w-full max-w-[300px] h-auto mx-auto" />,
      reverse: false,
      title: "Custos e Margens",
      description:
        "Definição de preços estratégicos, análise de margens sob diferentes perspectivas e viabilidade de precificação para otimizar a rentabilidade.",
    },
    {
      image: <FinanceSvg className="w-full max-w-[300px] h-auto mx-auto" />,
      reverse: true,
      title: "Viabilidade Financeira",
      description:
        "Reestruturação e fortalecimento financeiro com gestão de caixa, projeção de resultados e análise de crédito e investimentos.",
    },
    {
      image: <FinanceSvg className="w-full max-w-[300px] h-auto mx-auto" />,
      reverse: false,
      title: "Assessoria Contábil",
      description:
        "Planejamento tributário, obrigações contábeis, suporte para fusões e aquisições, elaboração de demonstrações financeiras e compliance.",
    },
    // {
    //   image: <FinanceSvg className="w-full max-w-[300px] h-auto mx-auto" />,
    //   reverse: true,
    //   title: "Investimento Financeiro",
    //   description:
    //     "Planejamento estratégico de investimentos, alocação de capital, diversificação, análise de riscos e estudo de tendências de mercado.",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-[-230px] rounded-2xl py-12 -scale-z-95 mx-auto max-w-[1100px] px-8 bg-white" id="solucoes">
      {/* <div className=" text-center">
        <h3 className="text-balance font-display text-3xl font-semibold text-brand">
          Impulsione sua Empresa com as Soluções Certas
        </h3>
      </div> */}
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-3 py-1 text-base font-medium ${
                activeIndex === index
                  ? "bg-[#205abd] text-white"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            variants={{
              enter: { opacity: 0, y: -50, filter: "blur(4px)" },
              center: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: { opacity: 0, y: 50, filter: "blur(4px)" },
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="mt-8 flex flex-col sm:flex-row gap-6 sm:p-0 p-4 items-center text-center sm:text-left">
                {item.image}
                <div className="py-2">
                  <h3 className="mb-2 text-2xl font-semibold text-brand">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </section>
  );
}