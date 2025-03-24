import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="absolute inset-0 block border-b transition-all border-neutral-100 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75"></div>
      <div className="mx-auto w-full px-3 relative lg:px-4 xl:px-0 max-w-screen-lg">
        <div className="flex h-14 items-center justify-between">
          <div className="grow basis-0">
            <Image src="/logo.png" width={75} height={75} alt="Dux Logo"  />
          </div>
          <nav data-orientation="horizontal" className="relative hidden lg:block">
            <div className="relative">
              <ul
                data-orientation="horizontal"
                className="group relative z-0 flex"
                dir="ltr"
              >
                <NavLink href="#sobre">Quem somos</NavLink>
                <NavLink href="#solucoes">Consultoria</NavLink>
                <NavLink href="#clientes">Clientes</NavLink>
                <NavLink href="">Cursos</NavLink>
              </ul>
            </div>
          </nav>
          <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
            <Button variant="whatsapp">Fale com um Especialista</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
