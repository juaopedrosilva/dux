import { BorderTrail } from "./ui/border-trail";
// import { Button } from "./ui/button";
import { TextEffect } from "./ui/text-effect";
import { TextLoop } from "./ui/text-loop";

export function Hero() {
  return (
    <div className="relative mx-auto  w-full h-[600px]  overflow-hidden  bg-neutral-50 text-center sm:p-12 sm:px-0">
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
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center ">
        <TextEffect
          per="word"
          as="h1"
          preset="blur"
          className="mt-0 text-center pt-9 sm:pt-0 font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in [animation-delay:100ms]"
        >
          Transformamos sua empresa com estratégia, gestão e inovação!
        </TextEffect>
        <p className="mt-5 text-base text-neutral-500 sm:text-xl animate-slide-up-fade [--offset:10px] [animation-delay:200ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in">
          <TextEffect preset="blur" per="word" as="span" delay={0.75}>
            Ajudamos negócios a crescerem de forma sustentável, otimizando
            processos e maximizando
          </TextEffect> {' '}
          <TextLoop
            className="overflow-y-clip font-bold text-neutral-900"
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
            <span>resultados.</span>
            <span>lucros.</span>
            <span>eficiência.</span>
            <span>o crescimento.</span>
          </TextLoop>
        </p>
      </div>
      {/* <div className="relative mx-auto mt-10 flex max-w-fit space-x-4 animate-slide-up-fade [--offset:5px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in">
        <Button variant="whatsapp">Fale com um Especialista</Button>
      </div> */}
    </div>
  );
}
