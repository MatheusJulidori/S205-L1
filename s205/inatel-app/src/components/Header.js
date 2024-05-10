import React from 'react';
import defaultLogo from '../assets/default-logo.png';

function Header() {
    return (
        <header className="header-content">
            <div className="card-aluno">
                <div className="img-container">
                    <img className="profile-pic" src={defaultLogo} alt="Foto do aluno" />
                </div>
                <div className="text-container">
                    <h1 className="nome-aluno">Olá Matheus Julidori</h1>
                </div>
            </div>
            <div className="prox-aula">
                <h3>Próxima aula</h3>
                <div className="card-aula">
                    <div className="aula-info">
                        <p>S205 |</p>
                        <p>21h30 |</p>
                        <p>VI-1.3</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
