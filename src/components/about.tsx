import Image from "next/image";

export function About() {
  return (
    <section className="mt-20" id='sobre'>
      <div className="relative mx-auto mt-4 w-full flex gap-12 max-w-screen-lg overflow-hidden sm:p-12 sm:px-0">
        <Image
          src="/pessoas.jpg"
          alt="Apple Music logo"
          height={500}
          width={480}
          className="rounded-2xl"
        />
        <div>
          <h3 className="text-balance font-display text-3xl font-medium text-neutral-900">
          Sobre Nós
          </h3>
          <p className="mt-3 text-pretty text-base leading-7.5 text-neutral-500">
            Somos uma consultoria estratégica comprometida em impulsionar
            empresas com inovação, transparência e foco em resultados. Nossa
            missão é transformar desafios em oportunidades, oferecendo soluções
            personalizadas para otimizar processos e gerar crescimento
            sustentável. Com visão de ser referência no mercado, guiamos nossos
            clientes com ética, excelência e compromisso com a qualidade. Se
            você busca inovação, eficiência e um time que realmente se importa
            com o seu sucesso, estamos prontos para ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
