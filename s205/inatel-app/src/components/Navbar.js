import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBook, faHome, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="bottom-nav-bar sticky">
            <div className="nav-icon">
                <FontAwesomeIcon icon={faTasks} />
                <p>ACs</p>
            </div>
            <div className="nav-icon">
                <FontAwesomeIcon icon={faBook} />
                <p>Disciplinas</p>
            </div>
            <div className="nav-icon-central">
                <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="nav-icon">
                <FontAwesomeIcon icon={faUsers} />
                <p>Professores</p>
            </div>
            <div className="nav-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <p>Sair</p>
            </div>
        </nav>
    );
}

export default Navbar;
