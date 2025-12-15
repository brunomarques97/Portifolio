import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin } from 'lucide-react';

const Header = ({ theme, toggleTheme, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const navItem = (label, id) => {
    return (
      <li className="nav-item">
        <button
          onClick={() => {
            scrollToSection(id);
            if (menuOpen) setMenuOpen(false);
          }}
          className={`nav-link fw-medium transition-colors
            ${isDark 
              ? 'text-light hover:text-warning' 
              : 'text-dark hover:text-warning'
            }
            bg-transparent border-0
          `}
          style={{ cursor: 'pointer' }}
        >
          {label}
        </button>
      </li>
    );
  };

  return (
    <>
      <header
        className={`fixed-top navbar navbar-expand-md shadow-lg ${isDark ? 'bg-dark navbar-dark' : 'bg-white navbar-light'}`}
        style={{
          '--bs-bg-opacity': 0.95,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="container-fluid px-4 px-md-5">
    
          <span
            onClick={() => scrollToSection('sobre')}
            className="navbar-brand fw-bolder fs-5 text-cyan"
            style={{ cursor: 'pointer' }}
          >
            Bruno Marques
          </span>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <Menu className="w-6 h-6 text-cyan" />
          </button>

          <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul 
              className="navbar-nav gap-4 align-items-center me-md-4"
            > 
              {navItem('Resumo', 'sobre')}
              {navItem('Habilidades', 'habilidades')}
              {navItem('Projetos', 'projetos')}
              {navItem('Formação', 'formacao')}
              {navItem('Contato', 'contato')}

              <li className="nav-item ms-md-4">
                <button
                  onClick={toggleTheme}
                  className="btn p-2 rounded-circle transition-all border-0"
                  aria-label="Tema"
                  style={{
                    backgroundColor: 'transparent',
                    '--bs-btn-hover-bg': 'rgba(0, 188, 212, 0.1)',
                  }}
                >
                  {isDark ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-cyan" />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div 
          className={`fixed-top vh-100 w-100 d-md-none d-flex flex-column align-items-center ${isDark ? 'bg-dark' : 'bg-white'}`} 
          style={{ zIndex: 1050, paddingTop: '4rem' }} 
        >
          <div className="d-flex justify-content-between align-items-center w-100 px-4 pt-3 position-absolute top-0">
            <span className={`${isDark ? 'text-info' : 'text-dark'} fw-bold fs-5`}>Menu</span>
            <button onClick={() => setMenuOpen(false)} className="btn p-2 border-0">
              <X className={`w-7 h-7 ${isDark ? 'text-white' : 'text-dark'}`} />
            </button>
          </div>

          <nav className="d-flex flex-column gap-5 mt-5">
            <button 
              onClick={() => {scrollToSection('sobre'); setMenuOpen(false)}} 
              className={`text-2xl border-0 bg-transparent ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`}
            >Resumo</button>
            <button 
              onClick={() => {scrollToSection('habilidades'); setMenuOpen(false)}} 
              className={`text-2xl border-0 bg-transparent ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`}
            >Habilidades</button>
            <button 
              onClick={() => {scrollToSection('projetos'); setMenuOpen(false)}} 
              className={`text-2xl border-0 bg-transparent ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`}
            >Projetos</button>
            <button 
              onClick={() => {scrollToSection('formacao'); setMenuOpen(false)}} 
              className={`text-2xl border-0 bg-transparent ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`}
            >Formação</button>
            <button 
              onClick={() => {scrollToSection('contato'); setMenuOpen(false)}} 
              className={`text-2xl border-0 bg-transparent ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`}
            >Contato</button>
            
            <button
                onClick={toggleTheme}
                className={`text-2xl border-0 bg-transparent d-flex justify-content-center align-items-center gap-3 fw-bold
                  ${isDark ? 'text-white hover:text-warning' : 'text-dark hover:text-warning'}
                `}
                aria-label="Tema"
            >
                {isDark 
                    ? <Sun className="w-7 h-7 text-warning" /> 
                    : <Moon className="w-7 h-7 text-cyan" />
                }
                <span className="fw-bold">{isDark ? 'Tema Claro' : 'Tema Escuro'}</span>
            </button>
          </nav>
          
          <div className="mt-auto mb-5 d-flex justify-content-center gap-4">
            <a href="https://github.com/brunomarques97" target="_blank" rel="noreferrer">
              <Github className={`w-7 h-7 ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`} />
            </a>
            <a href="https://www.linkedin.com/in/bruno-marques-desenvolvedor/" target="_blank" rel="noreferrer">
              <Linkedin className={`w-7 h-7 ${isDark ? 'text-white hover:text-info' : 'text-dark hover:text-info'}`} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;