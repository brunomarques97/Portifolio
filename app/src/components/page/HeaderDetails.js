import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

class HeaderDetails extends React.Component {
    render() {
        // Acessa as props passadas do componente pai (Page)
        const { theme, toggleTheme } = this.props;
        const isDark = theme === 'dark';
        
        // Classes de estilo
        const outlineButtonClass = `btn-outline-${isDark ? 'info' : 'danger'}`;
        const logoTextColor = 'text-cyan';

        return (
            <header
                className={`fixed-top navbar navbar-expand-md shadow-lg ${isDark ? 'bg-dark navbar-dark' : 'bg-white navbar-light'}`}
                style={{
                    '--bs-bg-opacity': 0.95,
                    backdropFilter: 'blur(8px)',
                }}
            >
                <div className="container-fluid px-4 px-md-5">
                    
                    {/* NOME/MARCA (Link para Home do Portfólio) */}
                    <Link to="/portifolio" className={`navbar-brand fw-bolder fs-5 ${logoTextColor}`} style={{ cursor: 'pointer' }}>
                        Bruno Marques
                    </Link>

                    <div className="d-flex align-items-center gap-3 ms-auto">
                        
                        {/* Botão Voltar para Portfólio */}
                        <Link 
                            to="/portifolio" 
                            className={`btn ${outlineButtonClass} fw-semibold d-flex align-items-center`}
                        >
                             <ArrowLeft size={18} className="me-2" /> Voltar ao Portfólio
                        </Link>

                        {/* Botão de Tema */}
                        <button
                            onClick={toggleTheme}
                            className="btn p-2 rounded-circle transition-all border-0"
                            aria-label="Tema"
                            style={{
                                backgroundColor: 'transparent',
                                '--bs-btn-hover-bg': 'rgba(0, 188, 212, 0.1)',
                            }}
                        >
                            {isDark ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-cyan" />}
                        </button>
                    </div>

                </div>
            </header>
        );
    }
}

export default HeaderDetails;