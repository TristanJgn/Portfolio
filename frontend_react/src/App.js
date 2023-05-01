import { Header, About, Experience, Projects, Footer } from './containers';
import { Navbar } from './components';
import "react-tooltip/dist/react-tooltip.css";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
