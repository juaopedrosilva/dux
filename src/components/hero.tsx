import { BorderTrail } from "./ui/border-trail";
import { Button } from "./ui/button";
import { TextEffect } from "./ui/text-effect";

export function Hero() {
  return (
    <div className="relative mx-auto mt-4 w-full max-w-screen-lg overflow-hidden rounded-2xl bg-neutral-50 p-6 text-center sm:p-12 sm:px-0">
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
              stroke-width="1"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid-:Rh7minb:)" width="100%" height="100%"></rect>
      </svg>
      <div className="absolute -left-1/4 top-[38%] h-[135%] w-[150%] opacity-10 blur-[120px] [transform:translate3d(0,0,0)]">
        <div className="size-full bg-[conic-gradient(at_50%_50%,_#93C5FD_0deg,_#93C5FD_117deg,_#60A5FA_180deg,_#93C5FD_360deg)] [mask-image:radial-gradient(closest-side,black_100%,transparent_100%)]"></div>
      </div>
      <div className="relative mx-auto flex w-full max-w-md flex-col items-center ">
        <TextEffect
          per="word"
          as="h1"
          preset="blur"
          className="mt-5 text-center font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in [animation-delay:100ms]"
        >
          Transformamos sua empresa com estratégia, gestão e inovação!
        </TextEffect>
        <TextEffect
          preset="blur"
          per="word"
          as="p"
          delay={0.75}
          className="mt-5 text-base text-neutral-500 sm:text-xl animate-slide-up-fade [--offset:10px] [animation-delay:200ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in"
        >
          Ajudamos negócios a crescerem de forma sustentável, otimizando
          processos e maximizando resultados.
        </TextEffect>
      </div>
      <div className="relative mx-auto mt-10 flex max-w-fit space-x-4 animate-slide-up-fade [--offset:5px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in">
        <Button variant="whatsapp">Fale com um Especialista</Button>
      </div>
    </div>
  );
}
