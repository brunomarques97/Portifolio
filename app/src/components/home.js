import './home.css';

//imagens
import foto from '../assets/foto.png';

function Home({page}) {
    return (
      <div className="home">
        <main id='home'>
        <img src={foto} alt="Foto" className="foto"/>
          <section className="texto">
            <h1>Olá, sou o</h1>
            <h1>Bruno Marques.</h1>
            <p>Desenvolvedor</p>
          </section>
          <button className="botao" onClick={page}>Veja meu portifolio</button>
        </main>      
      </div>
    );
  }
  
  export default Home;