import React from 'react';
import DefaultView from './components/defaultView/defaultView';
import Home from './views/Home/Home';
import Professores from './views/Professores/Professores';
import Disciplina from './views/Disciplina/Disciplina';
import Vagas from './views/Vagas/Vagas';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <DefaultView>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/professores" element={<Professores />} />
                        <Route path="/disciplinas" element={<Disciplina />} />
                        <Route path="/vagas" element={<Vagas />} />
                    </Routes>
                </DefaultView>
            </Router>
        </div>
    );
}

export default App;
