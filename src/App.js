import './styles/style.scss';
import { NavBar } from "./components/NavBar";
import { ListFeatures } from './components/ListFeatures';

function App() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="intro">
          <div className="сontainer">
            <div className="Title">
              <h5>TontonizeR</h5>
              <h5>Beutiful UI, Customization and more.</h5>
              <h5>We are TontonizeR!</h5>
            </div>
            <div className="BtnDownload">
              <button className="Download">
                <a href="#Download">Download</a>
              </button>
            </div>
          </div>
        </div>
        
      </section>
      <section>
        <ListFeatures/>
      </section>
      <section>

      </section>
      <section>

      </section>
    </div>
  );
}

export default App;
