import './projeto2.css';

//imagens
import progeto2 from '../../assets/Captura de tela_20230118_105611.png';


function Projeto2() {
    return (
      <div>
        <main>
          <section className="texto">
            <h1>Palavra secreta</h1>
            <img src={progeto2} alt="Palavra secreta" />
          </section>
        </main>      
      </div>
    );
  }
  
  export default Projeto2;