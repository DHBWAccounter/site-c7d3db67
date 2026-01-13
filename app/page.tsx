import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { InfoCards } from "@/components/info-cards";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <InfoCards />
      </main>
      <Footer />
    </>
  );
}