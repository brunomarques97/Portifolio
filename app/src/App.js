import './App.css';
import {useState} from "react";


import Home from './components/home';
import Page from './components/page';
import Projeto1 from './components/page/projeto1';
import Projeto2 from './components/page/projeto2';

const estagio =[
  {id:1,name:"home"},
  {id:2,name:"page"},
  {id:3,name:"projeto1"},
  {id:4,name:"projeto2"},
];

function App() {
  const[estagiopage,setestagiopage] = useState(estagio[0].name);

  const home=()=>{
    setestagiopage(estagio[0].name) 
  }
  const page=()=>{
    setestagiopage(estagio[1].name) 
  }
  const PROJETO1=()=>{
    setestagiopage(estagio[2].name) 
  }
  const PROJETO2=()=>{
    setestagiopage(estagio[3].name) 
  }
  
  const clear=(estagiopage === 'home')

  function menu(){
    document.getElementById("links").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block"
  }
  function close(){
    document.getElementById("links").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none"
  }

  return (
    <div className="App">
      <header className={clear ? "clear":"link"}>
        <p id="menu" className="menu" onClick={menu}>
            <span className="material-icons">
              menu
            </span>
        </p>
        <section id="links" className="links">
          <p id="close" className="close" onClick={close}>
            <span className="material-icons">
              close
            </span>
          </p>
          <ul>
            <li><a href="#home" onClick={home}>Home</a></li>
            <li onClick={close}><a href="#sobre" onClick={page} >sobre</a></li>
            <li onClick={close}><a  href="#projetos" onClick={page}>Meus Projetos</a></li>
            <li onClick={close}><a  href="#contato" onClick={page}>contato</a></li>
          </ul>
        </section>
      </header>
      {estagiopage === 'home' && <Home page={page}/>}
      {estagiopage === 'page' && (<Page PROJETO1={PROJETO1} PROJETO2={PROJETO2} />)}
      {estagiopage === 'projeto1' && (<Projeto1 page={page}/>)}
      {estagiopage === 'projeto2' && (<Projeto2 page={page}/>)}
    </div>
  );
}

export default App;
