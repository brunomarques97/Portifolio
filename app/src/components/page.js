import React, { useState } from 'react';

// Importe seus componentes de página
import Header from './page/Header';
import About from './page/About';
import Skills from './page/Skills';
import Projects from './page/Projects';
import GitHubStatus from './page/GitHubStatus';
import Education from './page/Education';
import Contact from './page/Contact';

function Page() {
  const [theme, setTheme] = useState('dark');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 70;
      const sectionTop = section.offsetTop - headerHeight;

      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-vh-100 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <main
        className="pt-1 pt-md-5"
      >

        <div className="container-fluid px-4 px-md-5">

          <section id="sobre" className="pt-5 pb-3">
            <About theme={theme} />
          </section>

          <section id="projetos" className="py-3">
            <Projects theme={theme} />
          </section>

          <section id="habilidades" className="py-3">
            <Skills theme={theme} />
          </section>

          <section id="github" className="py-3">
            <GitHubStatus theme={theme} />
          </section>


          <section id="formacao" className="py-3">
            <Education theme={theme} />
          </section>

          <section id="contato" className="py-3">
            <Contact theme={theme} />
          </section>

        </div>
      </main>

    </div>
  );
}

export default Page;