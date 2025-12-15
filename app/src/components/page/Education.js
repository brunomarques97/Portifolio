import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = ({ theme }) => {
    const isDark = theme === 'dark';

    // Variáveis de tema para consistência
    const highlightColor = isDark ? 'text-info' : 'text-danger';
    const highlightBorderColor = isDark ? 'border-info' : 'border-danger';
    const mainTextColor = isDark ? 'text-light' : 'text-dark';
    const bgColor = isDark ? 'bg-dark' : 'bg-light';
    
    // Fundo do bloco interno (card) com contraste
    const cardBgColor = isDark ? 'bg-secondary' : 'bg-white';
    
    // Cor de fundo do ícone com opacidade
    const iconBgClass = isDark ? 'bg-info bg-opacity-25' : 'bg-danger bg-opacity-25';

    return (
        <section 
            id="formacao" 
            className={`py-5 py-md-5 ${bgColor}`} // Ajustado para Bootstrap padding e background
        >
            <div className="container-lg px-4 px-md-5">
                
                {/* Título no padrão do projeto */}
                <h2 className={`fs-2 fw-bold mb-4 ${highlightColor} border-bottom border-3 pb-2 ${highlightBorderColor}`}>
                    Formação Acadêmica
                </h2>
                
                {/* Card de Formação */}
                <div 
                    className={`card p-4 rounded shadow-lg ${cardBgColor} ${mainTextColor} border-start border-4 ${highlightBorderColor}`}
                >
                    <div className="d-flex align-items-start gap-4">
                        <div className="flex-shrink-0">
                            {/* Ícone (W-12 H-12 -> 50px com p-3) */}
                            <div 
                                className={`rounded-circle p-3 d-flex align-items-center justify-content-center ${iconBgClass}`}
                                style={{ width: '50px', height: '50px' }}
                            >
                                <GraduationCap className={highlightColor} size={24} />
                            </div>
                        </div>
                        
                        <div className="flex-grow-1">
                            {/* Título */}
                            <h3 className={`fs-5 fw-bold ${highlightColor} mb-2`}>
                                Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas
                            </h3>
                            
                            {/* Instituição */}
                            <p className="fs-6 fw-semibold mb-1">
                                Universidade de Caxias do Sul (UCS)
                            </p>
                            
                            {/* Período */}
                            <p className="small text-muted fst-italic mb-0">
                                Início: Outubro de 2023 | Previsão de Conclusão: 05/2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;