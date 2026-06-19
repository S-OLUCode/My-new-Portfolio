import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import Nav from "./components/Nav";
import { Projects } from "./components/Projects";
import Contact from "./components/contacts";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;