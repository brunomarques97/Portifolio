import './page.css';

//imagens
import progeto1 from '../assets/Captura de tela 2023-04-30 170911.png';
import progeto2 from '../assets/Captura de tela_20230118_105611.png';

function Page() {
    return (
      <div>
        <main className="page">
          <section className="divisao">
            <section className="sobre">
                <h1>Quem é o Bruno?</h1>
                <p>Sou desenvolvedor em transição de carreira. Sou apaixonado por tecnogia e amante de  jogos.</p>
                <p className="linha"></p>
            </section>
          </section>
          <section className="divisao" >
            <h1>Meu Projetos</h1>
            <section className="projetos">
                <section>
                  <img src={progeto1} alt="Gerador de Conselhos" />
                  <h3>Gerador de Conselhos</h3>
                  <p>Conheça mais</p>
                </section>
                <section>
                  <img src={progeto2} alt="Palavra secreta" />
                  <h3>Palavra secreta</h3>
                  <p>Conheça mais</p>
                </section>
            </section>
          </section>
        </main>
        <footer>
          <section className="divisao" >
              <h1>Entre em contato</h1>
              <section className="contato">

              </section>
            </section>
        </footer>    
      </div>
    );
  }
  
  export default Page;