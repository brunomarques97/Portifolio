import React from 'react';
import { ExternalLink, Github, Youtube, ArrowLeft, Image } from 'lucide-react';
import { Link, useParams } from 'react-router-dom'; 
import projectsData from '../data/projects.json'; 


const ProjectDetails = ({ theme = 'dark' }) => {
    const { projectSlug } = useParams();

    const projectList = Array.isArray(projectsData) ? projectsData : projectsData.projects || [];
    
    const project = projectList.find(p => p.slug === projectSlug || p.id.toString() === projectSlug);

    if (!project) {
        const isDark = theme === 'dark';
        const mainTextColor = isDark ? 'text-light' : 'text-dark';
        const primaryButtonClass = `btn-${isDark ? 'info' : 'danger'} text-white`;

        return (
            <section className={`min-vh-100 py-5 text-center ${isDark ? 'bg-dark' : 'bg-light'} ${mainTextColor}`}>
                <div className="container-lg pt-5">
                    <h1 className="display-4 fw-bold text-danger mt-5">404</h1>
                    <p className="lead">Projeto não encontrado. O endereço é inválido ou o projeto foi removido.</p>
                    <Link to="/portifolio" className={`btn ${primaryButtonClass} mt-4`}>
                        <ArrowLeft size={18} className="me-2" /> Voltar ao Portfólio
                    </Link>
                </div>
            </section>
        );
    }
    
    const isDark = theme === 'dark';
    
    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';
    const primaryButtonClass = `btn-${isDark ? 'info' : 'danger'} ${mainTextColor === 'text-light' ? 'text-white' : 'text-dark'}`;
    const outlineButtonClass = `btn-outline-${isDark ? 'info' : 'danger'}`;
    const cardBgColor = isDark ? 'bg-secondary' : 'bg-white';
    
    // NOVO: Lógica para determinar a classe da coluna principal e a renderização lateral
    const hasVideo = !!project.youtubeUrl;
    const mainColClass = hasVideo ? 'col-lg-8' : 'col-lg-12';

    return (
        <section
            id="project-details"
            className={`py-5 ${isDark ? 'bg-dark' : 'bg-light'} ${mainTextColor}`}
        >
            <div className="container-lg">
                
                <h1 className={`fs-1 fw-bold mb-2 ${highlightColor}`}>
                    {project.title}
                </h1>
                
                <p className="lead fs-5 mb-4 opacity-75">{project.description}</p>

                <div className="d-flex flex-wrap gap-3 mb-5 border-bottom pb-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${primaryButtonClass} d-flex align-items-center gap-2 fw-semibold`}
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${outlineButtonClass} d-flex align-items-center gap-2 fw-semibold`}
                        >
                            <Github size={18} />
                            Repositório GitHub
                        </a>
                    )}
                </div>

                <div className="row g-5">
                    
                    <div className={mainColClass}>
                        
                        <h2 className={`fs-4 fw-bold mb-3 ${highlightColor}`}>Visão Geral do Projeto</h2>
                        <p className="mb-5" style={{ lineHeight: '1.8' }}>
                            {project.detailDescription || project.description} 
                        </p>

                        {project.technologies && project.technologies.length > 0 && (
                            <>
                                <h2 className={`fs-4 fw-bold mb-3 ${highlightColor}`}>
                                    Tecnologias-Chave
                                </h2>
                                <div className="d-flex flex-wrap gap-2 mb-5">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={`badge ${project.colorClass || 'bg-primary'} text-white px-3 py-2 fs-6 shadow-sm`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}

                        {project.galleryImages && project.galleryImages.length > 0 && (
                            <>
                                <h2 className={`fs-4 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2`}>
                                    <Image size={24} className="me-2" /> Capturas de Tela
                                </h2>
                                <div className="d-flex overflow-auto gap-4 pb-3 mb-5 p-2 bg-body-tertiary rounded shadow-sm" style={{ scrollbarWidth: 'none' }}>
                                    {project.galleryImages.map((image, idx) => (
                                        <div key={idx} style={{ flexShrink: 0, width: '300px' }}>
                                            <img 
                                                src={image.src} 
                                                alt={image.caption} 
                                                className="img-fluid rounded shadow"
                                                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                            />
                                            <p className={`text-center small mt-2 ${mainTextColor} opacity-75`}>{image.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* COLUNA LATERAL: Renderizada APENAS se houver vídeo. */}
                    {hasVideo && (
                        <div className="col-lg-4">
                            
                            <div className={`card p-4 shadow-lg sticky-top ${cardBgColor}`} style={{ top: '80px' }}>
                                <h3 className={`fs-5 fw-bold mb-3 ${highlightColor}`}>
                                    <Youtube size={20} className="me-2" /> Visão Geral em Vídeo
                                </h3>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={project.youtubeUrl}
                                        title={`Vídeo do projeto ${project.title}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded"
                                    ></iframe>
                                </div>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;