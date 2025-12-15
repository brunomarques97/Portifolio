import React from 'react';
import { Github, Linkedin, MessageSquare, FileText } from 'lucide-react';

const Contact = ({ theme }) => {
    const isDark = theme === 'dark';

    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';
    const bgColor = isDark ? 'bg-dark' : 'bg-light';
    
    const cardBgColor = isDark ? 'bg-secondary' : 'bg-white';
    
    const linkBgColor = 'bg-dark'; 
    const linkHoverClass = isDark ? 'hover-bg-info' : 'hover-bg-danger';

    const whatsappUrl = "https://wa.me/5554984496494"; 
    const curriculumUrl = "/Bruno_Marques.pdf";

    return (
        <section 
            id="contato" 
            className={`py-5 py-md-5 ${bgColor}`}
        >
            <div className="container-lg px-4 px-md-5">
                
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Entre em Contato
                </h2>

                <div className={`rounded-xl p-5 shadow-lg ${cardBgColor} ${mainTextColor}`}>
                    <div className="text-center">
                        
                        <h3 className={`fs-4 fw-semibold mb-4 ${highlightColor}`}>
                            Envie-me uma Mensagem Direta
                        </h3>
                        
                        <p className="text-muted mb-5">
                            Você pode me encontrar nas seguintes plataformas:
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
                            
                
                            <a
                                href="https://github.com/brunomarques97"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={`d-flex flex-column align-items-center gap-2 p-4 rounded-3 text-white text-decoration-none shadow-sm ${linkBgColor} transition-all duration-300 ${linkHoverClass} border border-2 border-transparent hover-border-${isDark ? 'info' : 'danger'}`}
                            >
                                <Github size={36} className="text-white" />
                                <span className="font-medium text-white">GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bruno-marques-desenvolvedor/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={`d-flex flex-column align-items-center gap-2 p-4 rounded-3 text-white text-decoration-none shadow-sm ${linkBgColor} transition-all duration-300 ${linkHoverClass} border border-2 border-transparent hover-border-${isDark ? 'info' : 'danger'}`}
                            >
                                <Linkedin size={36} className="text-white" />
                                <span className="font-medium text-white">LinkedIn</span>
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className={`d-flex flex-column align-items-center gap-2 p-4 rounded-3 text-white text-decoration-none shadow-sm ${linkBgColor} transition-all duration-300 ${linkHoverClass} border border-2 border-transparent hover-border-${isDark ? 'info' : 'danger'}`}
                            >
                                <MessageSquare size={36} className="text-white" />
                                <span className="font-medium text-white">WhatsApp</span>
                            </a>
                            
                            <a
                                href={curriculumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Currículo"
                                className={`d-flex flex-column align-items-center gap-2 p-4 rounded-3 text-white text-decoration-none shadow-sm ${linkBgColor} transition-all duration-300 ${linkHoverClass} border border-2 border-transparent hover-border-${isDark ? 'info' : 'danger'}`}
                            >
                                <FileText size={36} className="text-white" />
                                <span className="font-medium text-white">Currículo</span>
                            </a>
                        </div>

                        <p className="text-muted small mt-5">
                            Estou sempre aberto a novas oportunidades e colaborações!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;