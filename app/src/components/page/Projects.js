import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Construction, Rocket } from 'lucide-react';

import projectsData from '../../data/projects.json';

const Projects = ({ theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = projectsData || [];
    const hasProjects = projects.length > 0;

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
        if (hasProjects) setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length, hasProjects]);

    const prevProject = useCallback(() => {
        if (hasProjects) setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length, hasProjects]);

    const currentProject = hasProjects ? projects[currentIndex] : {
        title: "Novos Projetos em Breve",
        description: "Estou preparando o portfólio com os melhores projetos desenvolvidos recentemente.",
        technologies: ["React", "JavaScript", "Node.js"],
        githubUrl: "#",
        colorClass: "bg-info"
    };

    useEffect(() => {
        if (hasProjects) {
            const intervalId = setInterval(() => {
                nextProject();
            }, 4000);
            return () => clearInterval(intervalId);
        }
    }, [currentIndex, nextProject, hasProjects]);

    return (
        <section id="projetos" className={`py-5 py-md-5 ${isDark ? 'bg-dark' : 'bg-light'}`}>
            <div className="container-lg">
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Meus Projetos
                </h2>

                <div className="position-relative">
                    {hasProjects && (
                        <button
                            onClick={prevProject}
                            className={`btn ${navButtonClass} position-absolute start-0 top-50 translate-middle-y rounded-circle p-3 shadow-lg d-none d-lg-block`}
                            style={{ zIndex: 10, transform: 'translate(-50%, -50%)' }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    )}

                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                            <div className={`card ${cardBgColor} shadow-lg`}>
                                <div className={`card-header p-0 border-0 ${currentProject.colorClass}`} style={{ height: '5px' }} />
                                <div className={`card-body py-5 px-4 px-md-5 ${mainTextColor}`}>
                                    
                                    <h3 className={`fs-4 fw-bold mb-3 ${highlightColor}`}>
                                        {currentProject.title}
                                    </h3>

                                    <p className="mb-3 fs-6">
                                        {currentProject.description}
                                    </p>

                                    <div className={`alert ${isDark ? 'alert-info' : 'alert-warning'} d-flex align-items-center gap-2 py-2 px-3 border-0`} role="alert">
                                        <Construction size={18} />
                                        <small className="fw-bold">Seção em desenvolvimento</small>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {currentProject.technologies.map((tech, idx) => (
                                            <span key={idx} className={`badge ${isDark ? 'bg-secondary text-light' : 'bg-dark text-light'} px-3 py-2`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="d-flex flex-column flex-sm-row gap-3">
                                        <button disabled className={`btn ${outlineButtonClass} flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-semibold opacity-50`}>
                                            <Github size={18} /> GitHub
                                        </button>
                                        <button disabled className={`btn ${primaryButtonClass} flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-semibold opacity-50`}>
                                            <Rocket size={18} /> Em Breve
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {hasProjects && (
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
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {hasProjects && (
                        <>
                            <button
                                onClick={nextProject}
                                className={`btn ${navButtonClass} position-absolute end-0 top-50 translate-middle-y rounded-circle p-3 shadow-lg d-none d-lg-block`}
                                style={{ zIndex: 10, transform: 'translate(50%, -50%)' }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            <div className="d-flex justify-content-between mt-4 d-lg-none px-3">
                                <button onClick={prevProject} className={`btn ${navButtonClass} rounded-pill px-4 py-2 shadow-sm`}>
                                    <ChevronLeft className="w-5 h-5 me-1" /> Anterior
                                </button>
                                <button onClick={nextProject} className={`btn ${navButtonClass} rounded-pill px-4 py-2 shadow-sm`}>
                                    Próximo <ChevronRight className="w-5 h-5 ms-1" />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;