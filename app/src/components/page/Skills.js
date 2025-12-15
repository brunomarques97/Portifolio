import React from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = ({ theme }) => {
    const isDark = theme === 'dark';

    // Variáveis de tema para consistência com About.js e Projects.js
    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';
    const bgColor = isDark ? 'bg-dark' : 'bg-light';
    const cardBgColor = isDark ? 'bg-secondary' : 'bg-white'; // bg-secondary para contraste no dark mode

    // Mapeamento de cores para os ícones, usando as classes padrão do Bootstrap
    const skillColors = {
        "Front-End": "bg-primary",
        "Back-End": "bg-success",
        "Bancos de Dados": "bg-warning",
        "Ferramentas e Conceitos": "bg-danger"
    };

    const skills = [
        {
            icon: Code,
            title: "Front-End",
            items: "ReactJS, HTML5, CSS3, JavaScript, Bootstrap",
        },
        {
            icon: Server,
            title: "Back-End",
            items: "Node.js (básico), APIs REST",
        },
        {
            icon: Database,
            title: "Bancos de Dados",
            items: "MySQL, MongoDB",
        },
        {
            icon: Wrench,
            title: "Ferramentas e Conceitos",
            items: "Git, GitHub, Testes, Performance, Metodologias Ágeis, Layouts Responsivos",
        }
    ];

    return (
        <section 
            id="habilidades" 
            className={`py-5 py-md-5 ${bgColor}`} // Ajustado para Bootstrap padding e background
        >
            <div className="container-lg px-4 px-md-5">
                
                {/* Título no padrão do projeto (fs-2, border-bottom) */}
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Competências / Habilidades Técnicas
                </h2>
                
                {/* Grid usando row e g-4 (gap) do Bootstrap */}
                <div className="row g-4">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        const iconBg = skillColors[skill.title];
                        
                        return (
                            <div 
                                key={index}
                                className="col-12 col-md-6" // Colunas responsivas
                            >
                                {/* Card/Div de Habilidade */}
                                <div 
                                    className={`p-4 rounded shadow-sm ${cardBgColor} ${mainTextColor} border-start border-4 ${highlightBorderColor} h-100`}
                                    // Adicionado h-100 para garantir que todos os cards na linha tenham a mesma altura
                                >
                                    <div className="d-flex align-items-start gap-3">
                                        
                                        {/* Container do Ícone (tamanho fixo para consistência) */}
                                        <div 
                                            className={`flex-shrink-0 rounded p-2 ${iconBg} d-flex align-items-center justify-content-center`}
                                            style={{ width: '48px', height: '48px' }} 
                                        >
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        
                                        <div className="flex-grow">
                                            {/* Título da Habilidade */}
                                            <h3 className={`fs-5 fw-bold ${highlightColor} mb-2`}>
                                                {skill.title}
                                            </h3>
                                            {/* Lista de Itens */}
                                            <p className="mb-0 fs-6">
                                                {skill.items}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;