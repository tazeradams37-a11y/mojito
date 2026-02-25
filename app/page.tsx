import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  );
}
