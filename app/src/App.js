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
  const[estagiopage,setestagiopage] = useState(estagio[2].name);

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


  return (
    <div className="App">
      <header>
        <section className="links">
          <ul>
            <li><p onClick={home}>Home</p></li>
            <li><a href="#sobre">sobre</a></li>
            <li><a href="#projetos">Meus Projetos</a></li>
            <li><a href="#contato">contato</a></li>
            <li><p className="ingles"></p></li>
            <li><p className="portugues"></p></li>
            <li><p className="lampada"></p></li>
          </ul>          
        </section>
      </header>
      {estagiopage === 'home' && <Home page={page}/>}
      {estagiopage === 'page' && (<Page PROJETO1={PROJETO1} PROJETO2={PROJETO2} />)}
      {estagiopage === 'projeto1' && (<Projeto1/>)}
      {estagiopage === 'projeto2' && (<Projeto2/>)}
    </div>
  );
}

export default App;
