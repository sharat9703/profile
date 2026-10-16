import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Banner/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
