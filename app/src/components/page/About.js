import React from 'react';

const About = ({ theme }) => {
    const isDark = theme === 'dark';

    // Variáveis de tema para consistência com o restante do projeto
    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';

    return (
        <section 
            id="sobre" 
            className={`py-5 py-md-5 ${isDark ? 'bg-dark' : 'bg-light'}`}
        >
            <div className="container px-4 px-md-5">
                
                {/* Título no padrão do projeto */}
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-2 pb-2 ${highlightBorderColor}`}>
                    Resumo Profissional
                </h2>
                
                {/* Removida a classe Tailwind 'space-y-4', confiando no 'mb-3' dos parágrafos */}
                <div className={mainTextColor}>
                    
                    <p className="fs-5 fw-semibold mb-3">
                        Desenvolvedor Full Stack com ênfase em Front-End, entusiasmado por elaborar 
                        interfaces web intuitivas, responsivas e de alto desempenho. Conto com um ano 
                        de experiência na construção de interfaces web notáveis.
                    </p>

                    <p className="fs-6 mb-3">
                        Sólida experiência com <span className={`fw-bold ${highlightColor}`}>HTML5, CSS3, 
                        JavaScript, React, Bootstrap</span> e integração com APIs REST. No back-end, possuo 
                        familiaridade com <span className={`fw-bold ${highlightColor}`}>Node.js, bancos de 
                        dados relacionais (MySQL) e não relacionais (MongoDB)</span>.
                    </p>

                    <p className="fs-6 mb-3">
                        Vivência na aplicação de conceitos como <span className={`fw-bold ${highlightColor}`}>controle 
                        de versão com Git</span>, testes de software, otimização de desempenho e <span className={`fw-bold ${highlightColor}`}>metodologias 
                        ágeis (Scrum, Kanban)</span>.
                    </p>

                    <p className="fs-6">
                        Desenvolvo soluções web eficazes e alinhadas aos objetivos empresariais, combinando 
                        raciocínio estratégico, atenção à experiência do usuário e boas práticas de desenvolvimento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;