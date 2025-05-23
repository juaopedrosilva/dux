import { BorderTrail } from "./ui/border-trail";
import { TextLoop } from "./ui/text-loop";
import { Features } from "@/components/features";

export function Hero() {
  return (
    <div className="relative mx-auto  w-full h-auto  overflow-hidden  bg-neutral-50 text-center sm:p-12 sm:pt-4 sm:px-0">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
      <svg
        className="pointer-events-none absolute inset-[unset] left-1/2 top-0 w-[1200px] -translate-x-1/2 text-neutral-300 [mask-image:linear-gradient(transparent,black_70%)]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-:Rh7minb:"
            x="0"
            y="-53.5"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid-:Rh7minb:)" width="100%" height="100%"></rect>
      </svg>
      <div className="absolute -left-1/4 top-[38%] h-[135%] w-[150%] opacity-10 blur-[120px] [transform:translate3d(0,0,0)]">
        <div className="size-full bg-[conic-gradient(at_50%_50%,_#93C5FD_0deg,_#93C5FD_117deg,_#60A5FA_180deg,_#93C5FD_360deg)] [mask-image:radial-gradient(closest-side,black_100%,transparent_100%)]"></div>
      </div>
      <Features />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center mt-9 mb-14 ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TextLoop
            className="mt-0 text-center pt-9 sm:pt-0 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in [animation-delay:100ms] break-words max-w-[90%] sm:max-w-3xl md:max-w-4xl"
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            <span className="inline-block whitespace-normal">
              Transformando desafios em soluções estratégicas para sucesso do seu negócio.
            </span>
            <span className="inline-block whitespace-normal">
              Reduzimos custos, potencializamos resultados.
            </span>
            <span className="inline-block whitespace-normal">
              Eficiência e estratégia para reduzir custos e maximizar resultados.
            </span>
            <span className="inline-block whitespace-normal">
              Potencialize suas vendas e melhore suas margens com soluções estratégicas e eficientes.
            </span>
          </TextLoop>
        </div>

        
      </div>
      {/* <div className="relative mx-auto mt-10 flex max-w-fit space-x-4 animate-slide-up-fade [--offset:5px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in">
        <Button variant="whatsapp">Fale com um Especialista</Button>
      </div> */}
    </div>
  );
}
