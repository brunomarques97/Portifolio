import './page.css';


//imagens
import progeto1 from '../assets/Captura de tela 2023-04-30 170911.png';
import progeto2 from '../assets/Captura de tela_20230118_105611.png';
import git from '../assets/github.png';
import linkedin from '../assets/linkedln.png';



function Page({PROJETO1,PROJETO2}) {
    return (
      <div>
        <main className="page">
          <section id='sobre' className="divisao">
            <section  className="sobre">
                <h1>Quem é o Bruno?</h1>
                <p>Sou um Desenvolvedor  Front-end começando na area.</p>
                <p>SSou apaixonado por tecnogia e amante de jogos.</p>
                <p className="linha"></p>
            </section>
          </section>
          <section id='projetos' className="divisao" >
            <h1>Meu Projetos</h1>
            <section className="projetos">
                <section onClick={PROJETO1}>
                  <img src={progeto1} alt="Gerador de Conselhos" />
                  <h3>Gerador de Conselhos</h3>
                  <p>Conheça mais</p>
                </section>
                <section onClick={PROJETO2}>
                  <img src={progeto2} alt="Palavra secreta" />
                  <h3>Palavra secreta</h3>
                  <p>Conheça mais</p>
                </section>
            </section>
          </section>
        </main>
        <footer>
          <section id='contato' className="divisao" >
              <section className="contato">
                  <h1>Entre em contato</h1>
                  <section>
                    <a href="https://github.com/brunomarques97" target="_blank" rel="noopener noreferrer"><img src={git} alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/bruno-c-marques" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedln"/></a>
                  </section>
              </section>
            </section>
        </footer>    
      </div>
    );
  }
  
  export default Page;