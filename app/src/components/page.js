import './page.css';

//imagens
import progeto1 from '../assets/Captura de tela 2023-04-30 170911.png';
import progeto2 from '../assets/Captura de tela_20230118_105611.png';

function Page() {
    return (
      <div>
        <main className="page">
          <section  >
            <h1>Quem é o Bruno?</h1>
            <section className="sobre">
                <p>Sou desenvolvedor em transição de carreira. Sou apaixonado por tecnogia e amante de  jogos.</p>
                <p className="linha"></p>
            </section>
          </section>
          <section className="projetos" >
            <h1>Meu Projetos</h1>
            <section >
                <section>
                  <img src={progeto1} alt="Gerador de Conselhos" />
                  <h3>Gerador de Conselhos</h3>
                </section>
                <section>
                  <img src={progeto2} alt="Palavra secreta" />
                  <h3>Palavra secreta</h3>
                </section>
            </section>
          </section>
          <section className="contato" >
            <h1>Entre em contato</h1>
          </section>
        </main>      
      </div>
    );
  }
  
  export default Page;