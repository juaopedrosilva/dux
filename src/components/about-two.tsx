import Image from "next/image";

export function AboutTwo() {


  return (
    <section className="mt-15 rounded-2xl mx-auto max-w-[1100px] grid grid-cols-[max-content_1fr] items-center gap-8" id="sobre">
      <Image
        src="/pessoas.jpg"
        alt="pessoas"
        height={500}
        width={480}
        className="rounded-2xl w-full max-w-[400px] h-auto"
      />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className=" font-display text-xl font-semibold text-brand">
              Consultoria de Confiança
            </h3>
            <p className="mt-2  font-display text-base">Entendemos a necessidade da sua empresa e trabalhamos para ser a mais confiável do Brasil.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className=" font-display text-xl font-semibold text-brand">
            Talentos e Tecnologia
            </h3>
            <p className="mt-2 font-display text-base">Atraímos os melhores profissionais e combinamos tecnologias inovadoras para resultados sustentáveis.</p>
          </div>
          
        </div>
        <div className="grid grid-cols-1">
        <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className=" font-display text-xl font-semibold text-brand">
            Foco em Resultados
            </h3>
            <p className="mt-2 font-display text-base">Atuamos na melhora de performance com ritmo, assertividade e foco em resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}