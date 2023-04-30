import './App.css';


import Home from './components/home';

function App() {
  return (
    <div className="App">
      <header>
        <section className="links">
          <p>Home</p>
          <p>sobre</p>
          <p>Meus Projetos</p>
          <p>contato</p>
        </section>
        <section className="icones">
          <p className="ingles"></p>
          <p className="portugues"></p>
          <p className="lampada"></p>
        </section>
      </header>
      <Home/>
    </div>
  );
}

export default App;
