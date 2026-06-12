import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Performers } from "@/components/home/Performers";
import { PracticalInfo } from "@/components/home/PracticalInfo";
import { Socials } from "@/components/home/Socials";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Performers />
      <PracticalInfo />
      <Socials />
    </main>
  );
}
