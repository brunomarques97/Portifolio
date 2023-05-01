import './projeto2.css';

//imagens
import progeto2 from '../../assets/Captura de tela_20230118_105611.png';


function Projeto2({page}) {
    return (
      <div>
        <main>
          <section>
            <h1>Palavra secreta</h1>
            <img src={progeto2} alt="Palavra secreta" />
          </section>
          <p>Projeto palavra secreta é um jogo de adivinhar palavras do curso de react.</p>
          <h2><a href="https://palavrasecreta.netlify.app/" target="_blank" rel="noopener noreferrer">Link para o site</a> </h2>
          <h2>Propriedades</h2>
          <ul className='propriedades'>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Framework react</li>
            <li>Utilizaçao de Componentes</li>
            <li>Flexbox</li>
          </ul>
          <button onClick={page}>Voltar</button>
        </main>      
      </div>
    );
  }
  
  export default Projeto2;
