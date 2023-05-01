import { About, Experience, Footer, Header, Projects } from './containers';
import { Navbar } from './components';
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
