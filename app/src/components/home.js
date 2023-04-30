import './home.css';

function Home({page}) {
    return (
      <div>
        <main>
          <section className="texto">
            <h1>Olá, sou o Bruno Marques.</h1>
            <p>Desenvolvedor</p>
          </section>
          <button className="botao" onClick={page}>Veja meu portifolio</button>
          <p className="foto"></p>
        </main>      
      </div>
    );
  }
  
  export default Home;