import { AboutTwo } from "@/components/about-two";
import { Clients } from "@/components/clients";
import { Contacts } from "@/components/contacts";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Numbers } from "@/components/numbers";

export default function Home() {
  return (
    <main className="mb-5">
      <Header />
      <Hero />
      <Features />
      <Numbers />
      <AboutTwo />
      <Clients />
      <Contacts />
      <Footer/>
    </main>
  );
}
