import React from 'react';
import { Github, GitBranch, Star, GitCommit } from 'lucide-react';

const GitHubStatus = ({ theme }) => {
    const isDark = theme === 'dark';

    // Variáveis de tema para consistência
    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';
    const bgColor = isDark ? 'bg-dark' : 'bg-light';
    
    // Fundo do bloco interno (card) com contraste
    const blockBgColor = isDark ? 'bg-secondary' : 'bg-white';
    const buttonClass = `btn-${isDark ? 'info' : 'danger'}`;

    return (
        <section 
            id="github" 
            className={`py-5 py-md-5 ${bgColor}`} // Ajustado para Bootstrap padding e background
        >
            <div className="container-lg">
                
                {/* Título no padrão do projeto */}
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Status de Contribuição no GitHub
                </h2>
                
                {/* Bloco principal de Status (simulando um card com borda tracejada) */}
                <div 
                    className={`p-4 p-md-5 rounded shadow ${blockBgColor} ${mainTextColor} border border-dashed border-2 ${highlightBorderColor} transition-all`}
                >
                    <div className="text-center">
                        <div className="mb-4">
                            {/* Ícone principal */}
                            <Github className={`mx-auto mb-4 ${highlightColor}`} size={80} />
                            
                            <p className="fs-6 mb-2">
                                Aqui serão integrados os widgets de status e contribuições do GitHub
                            </p>
                            <p className="text-muted small mb-0">
                                (ex: GitHub Readme Stats ou streak-stats)
                            </p>
                        </div>
                        
                        {/* Placeholder para estatísticas (Grid de 3 colunas) */}
                        <div className="row g-3 mb-4 max-w-md mx-auto justify-content-center">
                            
                            <div className="col-4 col-sm-3">
                                {/* bg-dark ou bg-light para contraste dentro do card */}
                                <div className={`p-3 rounded ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                    <GitBranch className={`mx-auto mb-2 ${highlightColor}`} size={24} />
                                    <p className="small text-muted mb-0">Repositórios</p>
                                </div>
                            </div>

                            <div className="col-4 col-sm-3">
                                <div className={`p-3 rounded ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                    <GitCommit className={`mx-auto mb-2 ${highlightColor}`} size={24} />
                                    <p className="small text-muted mb-0">Commits</p>
                                </div>
                            </div>

                            <div className="col-4 col-sm-3">
                                <div className={`p-3 rounded ${isDark ? 'bg-dark' : 'bg-light'}`}>
                                    <Star className={`mx-auto mb-2 ${highlightColor}`} size={24} />
                                    <p className="small text-muted mb-0">Estrelas</p>
                                </div>
                            </div>
                        </div>
                        
                        <a
                            href="https://github.com/brunomarques97"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${buttonClass} text-white btn-lg rounded-pill shadow-lg fw-semibold mt-3`}
                        >
                            <Github size={20} className="me-2" />
                            Ver perfil no GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStatus;