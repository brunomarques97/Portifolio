import React from 'react';

const About = ({ theme }) => {
    const isDark = theme === 'dark';

    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';

    return (
        <section 
            id="sobre" 
            className={`py-5 py-md-5 ${isDark ? 'bg-dark' : 'bg-light'}`}
        >
            <div className="container px-4 px-md-5">
                
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-2 pb-2 ${highlightBorderColor}`}>
                    Resumo Profissional
                </h2>
                
                <div className={mainTextColor}>
                    
                    <p className="fs-5 fw-semibold mb-3">
                        Desenvolvedor Full Stack com foco em Front-End, apaixonado por criar interfaces web 
                        intuitivas, responsivas e de alto desempenho. Possuo mais de três anos de experiência 
                        na criação de interfaces web de destaque.
                    </p>

                    <p className="fs-6 mb-3">
                        Minha jornada começou com <span className={`fw-bold ${highlightColor}`}>VBA (automação em Excel)</span>, 
                        que me forneceu uma base sólida em lógica de programação. A paixão pelo desenvolvimento de software 
                        me levou a fazer a transição para a área de <span className={`fw-bold ${highlightColor}`}>freelancer web</span>.
                    </p>

                    <p className="fs-6 mb-3">
                        Enquanto atuava como freelancer, percebi a importância de uma base sólida, investindo em formação 
                        contínua e começando a faculdade. Domino tecnologias como <span className={`fw-bold ${highlightColor}`}>React.js, 
                        JavaScript (ES6+), HTML5, CSS3 e Bootstrap</span> para desenvolvimento front-end, bem como 
                        <span className={`fw-bold ${highlightColor}`}> Node.js</span> para back-end.
                    </p>

                    <p className="fs-6 mb-3">
                        Tenho habilidades para integrar <span className={`fw-bold ${highlightColor}`}>APIs</span>, realizar 
                        modelagem e consultas em bancos de dados e efetuar autenticações. Minha autogestão, organização 
                        do tempo e visão analítica, demonstradas em auditoria, fazem de mim um profissional versátil 
                        e pronto para enfrentar desafios.
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