import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Resume from "@/components/portfolio/Resume";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-animated-3d animate-page-enter">
      <LoadingScreen />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
