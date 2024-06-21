import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBook, faHome, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className="bottom-nav-bar sticky">
            <Link to="/vagas" className="nav-icon">
                <FontAwesomeIcon icon={faTasks} />
                <p>Vagas</p>
            </Link>
            <Link to="/disciplinas" className="nav-icon">
                <FontAwesomeIcon icon={faBook} />
                <p>Disciplinas</p>
            </Link>
            <Link to="/" className="nav-icon-central">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/professores" className="nav-icon">
                <FontAwesomeIcon icon={faUsers} />
                <p>Professores</p>
            </Link>
            <Link to="/sair" className="nav-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <p>Sair</p>
            </Link>
        </nav>
    );
}

export default Navbar;
