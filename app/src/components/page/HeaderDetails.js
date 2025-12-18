import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

class HeaderDetails extends React.Component {
    render() {
        const { theme, toggleTheme } = this.props;
        const isDark = theme === 'dark';
        
        const outlineButtonClass = `btn-outline-${isDark ? 'info' : 'secondary'}`;

        return (
            <header
                className={`fixed-top navbar navbar-expand-md shadow-lg ${isDark ? 'bg-dark navbar-dark' : 'bg-white navbar-light'}`}
                style={{
                    '--bs-bg-opacity': 0.95,
                    backdropFilter: 'blur(8px)',
                }}
            >
                <div className="container-fluid px-4 px-md-5">
                    
                    <Link 
                        to="/portifolio" 
                        className="navbar-brand fw-bolder fs-5 text-cyan" 
                        style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                        Bruno Marques
                    </Link>

                    <div className="d-flex align-items-center gap-2 gap-md-3 ms-auto">
                        
                        <Link 
                            to="/portifolio" 
                            className={`btn ${outlineButtonClass} fw-semibold d-flex align-items-center`}
                        >
                             <ArrowLeft size={18} className="me-md-2" /> 
                             <span className="d-none d-sm-inline">Voltar ao Portfólio</span>
                        </Link>

                        <button
                            onClick={toggleTheme}
                            className="btn p-2 rounded-circle transition-all border-0"
                            aria-label="Tema"
                            style={{
                                backgroundColor: 'transparent',
                                '--bs-btn-hover-bg': 'rgba(0, 188, 212, 0.1)',
                            }}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-warning" />
                            ) : (
                                <Moon className="w-5 h-5 text-cyan" />
                            )}
                        </button>
                    </div>

                </div>
            </header>
        );
    }
}

export default HeaderDetails;