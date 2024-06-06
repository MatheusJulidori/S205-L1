import React from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import './Disciplina.css';

function Disciplina() {
    const Disciplinas = [
        ["C214", "8/10", "85", "-","13/06"],
        ["S107", "12/20", "84" , "-","12/06"],
        ["S205", "5/30", "72", "-","26/06"],
        ["C216", "0/30", "70","-", "24/06"],
        ["G008", "12/15", "80","-", "21/06"],
    ];

    return (
        <main className="main-content">
            <Header />
            <Table title="Professores" columns={["Código Disc.", "Frequencia", "NP1", "NP2", "Próxima Avaliação"]} data={Disciplinas} />
        </main>
    );
}

export default Disciplina;
