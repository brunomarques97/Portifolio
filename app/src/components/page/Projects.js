import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const Projects = ({ theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    //teste de projetos
    const projects = [
        {
            id: 1,
            title: "E-commerce Completo",
            description: "Plataforma de vendas responsiva com carrinho de compras e integração de pagamento.",
            technologies: ["React", "Node.js", "MongoDB"],
            colorClass: "bg-primary",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Aplicação de Tarefas",
            description: "Gerenciamento de tarefas diárias com interface intuitiva e persistência de dados.",
            technologies: ["React", "CSS3", "JavaScript"],
            colorClass: "bg-secondary",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 3,
            title: "Website Institucional",
            description: "Criação de um site de apresentação profissional e blog corporativo.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            colorClass: "bg-success",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 4,
            title: "Dashboard Analítico",
            description: "Interface de visualização de dados com gráficos interativos e relatórios.",
            technologies: ["React", "D3.js", "API REST"],
            colorClass: "bg-danger",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 5,
            title: "Clone de Rede Social",
            description: "Desenvolvimento do frontend de uma rede social básica com feed e perfis.",
            technologies: ["React", "Bootstrap", "Firebase"],
            colorClass: "bg-warning",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 6,
            title: "Calculadora Financeira",
            description: "Ferramenta para cálculo de juros compostos e simulações de investimento.",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            colorClass: "bg-info",
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    const isDark = theme === 'dark';

    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';

    const cardBgColor = isDark ? 'bg-secondary' : 'bg-white';

    const navButtonClass = `btn-${isDark ? 'info' : 'danger'}`;
    const primaryButtonClass = `btn-${isDark ? 'info' : 'danger'} ${mainTextColor === 'text-light' ? 'text-white' : 'text-dark'}`;
    const outlineButtonClass = `btn-outline-${isDark ? 'info' : 'danger'}`;

    const activeIndicatorStyle = {
        width: '32px',
        backgroundColor: isDark ? 'var(--bs-info)' : 'var(--bs-danger)',
    };
    const inactiveIndicatorStyle = {
        width: '8px',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.2)',
    };

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    const currentProject = projects[currentIndex];

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextProject();
        }, 4000);

        return () => clearInterval(intervalId);

    }, [currentIndex, nextProject]);

    return (
        <section
            id="projetos"
            className={`py-5 py-md-5 ${isDark ? 'bg-dark' : 'bg-light'}`}
        >
            <div className="container-lg">

                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Meus Projetos
                </h2>

                <div className="position-relative">

                    <button
                        onClick={prevProject}
                        className={`btn ${navButtonClass} position-absolute start-0 top-50 translate-middle-y rounded-circle p-3 shadow-lg d-none d-lg-block`}
                        style={{ zIndex: 10, transform: 'translate(-50%, -50%)' }}
                        aria-label="Projeto anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7">

                            <div className={`card ${cardBgColor} shadow-lg`}>

                                <div
                                    className={`card-header p-0 border-0 ${currentProject.colorClass}`}
                                    style={{ height: '5px' }}
                                />

                                <div className={`card-body py-5 px-4 px-md-5 ${mainTextColor}`}>

                                    <h3 className={`fs-4 fw-bold mb-3 ${highlightColor}`}>
                                        {currentProject.title}
                                    </h3>

                                    <p className="mb-3 fs-6">
                                        {currentProject.description}
                                    </p>

                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {currentProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className={`badge ${isDark ? 'bg-secondary text-light' : 'bg-dark text-light'} px-3 py-2`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="d-flex flex-column flex-sm-row gap-3">
                                        <a
                                            href={currentProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${outlineButtonClass} flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-semibold`}
                                        >
                                            <Github size={18} />
                                            GitHub
                                        </a>
                                        <a
                                            href={currentProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${primaryButtonClass} flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-semibold`}
                                        >
                                            <ExternalLink size={18} />
                                            Ver Projeto
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center gap-2 mt-4">
                                {projects.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className="btn rounded-circle p-0 border-0"
                                        style={{
                                            height: '8px',
                                            transition: 'width 0.3s, background-color 0.3s',
                                            ...(idx === currentIndex ? activeIndicatorStyle : inactiveIndicatorStyle)
                                        }}
                                        aria-label={`Ir para projeto ${idx + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>


                    {/* Botão Próximo (Desktop) */}
                    <button
                        onClick={nextProject}
                        className={`btn ${navButtonClass} position-absolute end-0 top-50 translate-middle-y rounded-circle p-3 shadow-lg d-none d-lg-block`}
                        style={{ zIndex: 10, transform: 'translate(50%, -50%)' }}
                        aria-label="Próximo projeto"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Botões de Navegação Mobile */}
                    <div className="d-flex justify-content-between mt-4 d-lg-none px-3">
                        <button
                            onClick={prevProject}
                            className={`btn ${navButtonClass} rounded-pill px-4 py-2 shadow-sm`}
                            aria-label="Projeto anterior"
                        >
                            <ChevronLeft className="w-5 h-5 me-1" /> Anterior
                        </button>
                        <button
                            onClick={nextProject}
                            className={`btn ${navButtonClass} rounded-pill px-4 py-2 shadow-sm`}
                            aria-label="Próximo projeto"
                        >
                            Próximo <ChevronRight className="w-5 h-5 ms-1" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;