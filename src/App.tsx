import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Testimonials } from "./sections/Testimonials";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Niches } from "./sections/Niches";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Faq } from "./sections/Faq";
import { Pricing } from "./sections/Pricing";
import { Cta } from "./sections/Cta";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <About />
        <Projects />
        <Niches />
        <Services />
        <Process />
        <Faq />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
