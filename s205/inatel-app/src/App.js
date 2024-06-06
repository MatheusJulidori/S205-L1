import React from 'react';
import DefaultView from './components/defaultView/defaultView';
import Home from './views/Home/Home';
import Professores from './views/Professores/Professores';
import Disciplina from './views/Disciplina/Disciplina';
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
                    </Routes>
                </DefaultView>
            </Router>
        </div>
    );
}

export default App;
