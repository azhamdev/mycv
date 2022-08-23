import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import Projects from './components/Projects';
import Gap from './components/Gap';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Gap height={40} />
        <Hero />
        <Projects />
      </header>
    </div>
  );
}

export default App;
