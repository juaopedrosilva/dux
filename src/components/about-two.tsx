import Image from "next/image";

export function AboutTwo() {
  return (
    <section 
      className="mt-15 rounded-2xl mx-auto max-w-[1100px] flex flex-col md:grid md:grid-cols-[max-content_1fr] items-center gap-6 p-4"
      id="sobre"
    >
      <Image
        src="/pessoas.jpg"
        alt="pessoas"
        height={500}
        width={480}
        className="rounded-2xl w-full max-w-[350px] sm:max-w-[400px] h-auto mx-auto"
      />
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-brand">
              Consultoria de Confiança
            </h3>
            <p className="mt-2 font-display text-sm">
              Entendemos a necessidade da sua empresa e trabalhamos para ser a mais confiável do Brasil.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-brand">
              Talentos e Tecnologia
            </h3>
            <p className="mt-2 font-display text-sm">
              Atraímos os melhores profissionais e combinamos tecnologias inovadoras para resultados sustentáveis.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 w-full">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-brand">
              Foco em Resultados
            </h3>
            <p className="mt-2 font-display text-sm">
              Atuamos na melhora de performance com ritmo, assertividade e foco em resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
