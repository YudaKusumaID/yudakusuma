import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import AboutSection from "./components/AboutSection";
import MassageSection from "./components/MessageSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
        <MassageSection />
      </div>
      <Footer/>
    </main>
  );
}