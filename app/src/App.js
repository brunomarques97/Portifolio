import './App.css';
import {useState} from "react";


import Home from './components/home';
import Page from './components/page';


const estagio =[
  {id:1,name:"home"},
  {id:2,name:"page"},
];

function App() {
  const[estagiopage,setestagiopage] = useState(estagio[0].name);

  const page=()=>{
    setestagiopage(estagio[1].name) 
  }

  return (
    <div className="App">
      <header>
        <section className="links">
          <p>Home</p>
          <p>sobre</p>
          <p>Meus Projetos</p>
          <p>contato</p>
        </section>
        <section className="icones">
          <p className="ingles"></p>
          <p className="portugues"></p>
          <p className="lampada"></p>
        </section>
      </header>
      {estagiopage === 'home' && <Home page={page}/>}
      {estagiopage === 'page' && (<Page/>)}
    </div>
  );
}

export default App;
