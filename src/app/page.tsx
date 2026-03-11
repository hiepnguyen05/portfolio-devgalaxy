import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SkillsOrbit from "@/components/sections/SkillsOrbit";
import ProjectChart from "@/components/sections/ProjectChart";
import Timeline from "@/components/sections/Timeline";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen">
      <Hero />
      <About />
      <SkillsOrbit />
      <ProjectChart />
      <Timeline />
      <Achievements />
      <Contact />
    </main>
  );
}
