import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home';
import Page from './components/page';


function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/portifolio" element={<Page />} />

          <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;