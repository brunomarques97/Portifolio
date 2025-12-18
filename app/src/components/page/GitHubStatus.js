import React, { useState, useEffect } from 'react';
import { Github, Code, BookOpen, Layout, Globe } from 'lucide-react';

const GitHubStatus = ({ theme }) => {
    const [stats, setStats] = useState({ repos: 0, languages: [], topRepos: [] });
    const [loading, setLoading] = useState(true);
    const isDark = theme === 'dark';

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/brunomarques97/repos?sort=updated&per_page=10`);
                const repos = await response.json();

                if (Array.isArray(repos)) {
                    const langsMap = {};
                    repos.forEach(repo => {
                        if (repo.language) {
                            langsMap[repo.language] = (langsMap[repo.language] || 0) + 1;
                        }
                    });
                    
                    const sortedLangs = Object.entries(langsMap)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 4)
                        .map(lang => lang[0]);

                    const highlights = repos.slice(0, 3);

                    setStats({
                        repos: repos.length,
                        languages: sortedLangs,
                        topRepos: highlights
                    });
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchGitHubData();
    }, []);

    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const blockBgColor = isDark ? 'bg-secondary' : 'bg-white';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';

    return (
        <section id="github" className={`py-5 ${isDark ? 'bg-dark' : 'bg-light'}`}>
            <div className="container-lg">
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Ecossistema de Desenvolvimento
                </h2>
                
                <div className={`p-4 p-md-5 rounded shadow ${blockBgColor} border border-2 ${highlightBorderColor}`}>
                    <div className="row g-4">
                        <div className="col-12 col-md-5 border-end-md">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Code className={highlightColor} size={28} />
                                <h4 className={`mb-0 fw-bold ${mainTextColor}`}>Stack em Foco</h4>
                            </div>
                            
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {loading ? (
                                    <div className="spinner-border spinner-border-sm text-info" role="status"></div>
                                ) : (
                                    stats.languages.map((lang, idx) => (
                                        <span key={idx} className={`badge ${isDark ? 'bg-dark text-info' : 'bg-light text-danger'} border border-1 ${highlightBorderColor} px-3 py-2`}>
                                            {lang}
                                        </span>
                                    ))
                                )}
                            </div>

                            <div className={`d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill ${isDark ? 'bg-dark' : 'bg-light'} border ${highlightBorderColor}`}>
                                <div className="position-relative d-flex align-items-center">
                                    <Globe size={18} className={`${highlightColor}`} />
                                    <span className={`position-absolute top-0 start-0 w-100 h-100 rounded-circle ${isDark ? 'bg-info' : 'bg-danger'} opacity-25 animate-ping`}></span>
                                </div>
                                <span className={`small fw-bold ${highlightColor}`}>
                                    Sincronizado em tempo real com meu GitHub
                                </span>
                            </div>
                        </div>

                        <div className="col-12 col-md-7">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Layout className={highlightColor} size={28} />
                                <h4 className={`mb-0 fw-bold ${mainTextColor}`}>Repositórios Recentes</h4>
                            </div>
                            <div className="list-group list-group-flush bg-transparent">
                                {stats.topRepos.map((repo, idx) => (
                                    <div key={idx} className="list-group-item bg-transparent border-0 px-0 py-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <BookOpen size={16} className="text-muted" />
                                            <a href={repo.html_url} target="_blank" rel="noreferrer" className={`fw-bold text-decoration-none ${isDark ? 'text-light' : 'text-dark'} hover-cyan`}>
                                                {repo.name}
                                            </a>
                                        </div>
                                        <p className="small text-muted mb-0">{repo.description || "Sem descrição disponível."}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <a href="https://github.com/brunomarques97" target="_blank" rel="noopener noreferrer" className={`btn btn-lg rounded-pill fw-bold ${isDark ? 'btn-outline-info' : 'btn-outline-danger shadow-sm'}`}>
                            <Github className="me-2" /> Explorar Perfil Completo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStatus;