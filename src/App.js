import './styles/style.scss';
import { NavBar } from "./components/NavBar";
import { ListFeatures } from './components/ListFeatures';
import { OurTeam } from './components/OurTeam';
import { Intro } from './components/Intro';
import { Footer } from './components/Footer';
import ContactUS from './components/ContactUS';

function App() {
  return (
    <div>
      <NavBar />
      <section>
        <Intro />
      </section>
      <section>
        <ListFeatures />
      </section>
      <section>
        <OurTeam />
      </section>
      <section>
        <ContactUS />
      </section>
      <section>
        <Footer />
      </section>

    </div>
  );
}

export default App;
