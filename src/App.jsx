import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Divider />

      <About />
      <Divider />

      <Skills />
      <Divider />

      <Experience />
      <Divider />

      <Projects />
      <Divider />

      <Contact />

      <Footer />
    </>
  );
}

export default App;