import './styles/style.scss';
import { NavBar } from './components/NavBar';
import { ListFeatures } from './components/ListFeatures';
import { OurTeam } from './components/OurTeam';
import { Intro } from './components/Intro';
import { Footer } from './components/Footer';
import FormContactUS from './components/FormContactUS';
import Products from './components/Products';

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
          <Products />
        </section>
        <section>
          <FormContactUS />
        </section>
        <section>
          <Footer />
        </section>
    </div>
  );
}

export default App;
