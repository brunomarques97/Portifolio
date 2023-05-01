import './projeto1.css';

//imagens
import progeto1 from '../../assets/Captura de tela 2023-04-30 170911.png';


function Projeto1({page}) {
    return (
      <div>
        <main>
          <section >
            <h1>Gerador de Conselhos</h1>
            <img src={progeto1} alt="Gerador de Conselhos" />
          </section>
          <p>Projeto de gerador de conselhos em HTML, CSS e JavaScript, responsiva para mobile (375px) e desktop (1440px)</p>
          <p>Front-mentor</p>
          <h2><a href="https://gerador-de-mensagens.netlify.app/" target="_blank" rel="noopener noreferrer">Link para o site</a> </h2>
          <h2>Propriedades</h2>
          <ul className='propriedades'>
            <li>Mobile</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Api</li>
          </ul>
          <button onClick={page}>Voltar</button>
        </main>      
      </div>
    );
  }
  
  export default Projeto1;