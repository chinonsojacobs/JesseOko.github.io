import Hero from "@/components/hero"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recentprojects";
import Experience from "@/components/experience";
import Specialties from "@/components/specialties";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={[
          { name: "Home", link: "/", icon: <FaHome/> }, 
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Experience", link: "#experience" },
          { name: "Contact", link: "#contact" },]} 
        className="px-6 py-4"
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Specialties />
        <Footer />
      </div>
    </main>
  );
}
