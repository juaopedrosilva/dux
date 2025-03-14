"use client";
import { motion } from "motion/react";

export function Features() {
  const items = [
    {
      title: "Processos",
      description:
        "Otimização e padronização de processos, integração ao ERP, definição de KPIs e metas, análise SWOT e melhoria dos controles internos.",
    },
    {
      title: "Financeiro",
      description:
        "Gestão financeira eficiente com análise de DRE, fluxo de caixa, projeção de resultados e identificação de oportunidades de ganhos e reduções.",
    },
    {
      title: "Custos e Margens",
      description:
        "Definição de preços estratégicos, análise de margens sob diferentes perspectivas e viabilidade de precificação para otimizar a rentabilidade.",
    },
    {
      title: "Viabilidade Financeira",
      description:
        "Reestruturação e fortalecimento financeiro com gestão de caixa, projeção de resultados e análise de crédito e investimentos.",
    },
    {
      title: "Assessoria Contábil",
      description:
        "Planejamento tributário, obrigações contábeis, suporte para fusões e aquisições, elaboração de demonstrações financeiras e compliance.",
    },
    {
      title: "Investimento Financeiro",
      description:
        "Planejamento estratégico de investimentos, alocação de capital, diversificação, análise de riscos e estudo de tendências de mercado.",
    },
    
  ];

  return (
    <section className="mt-20" id="solucoes">
      <div className="mx-auto w-full max-w-xl px-4 text-center">
        <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
          Impulsione sua Empresa com as Soluções Certas
        </h3>
        <p className="mt-3 text-pretty text-lg text-neutral-500">
          Processos otimizados, finanças controladas e tecnologia alinhada ao
          seu crescimento.
        </p>
      </div>
      <div className="w-full max-w-screen-lg mt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white border-b rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
