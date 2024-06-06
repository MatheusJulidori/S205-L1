import React from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import './Disciplina.css';

function Disciplina() {
    const Disciplinas = [
        ["C214", "8/10", "85", "-"],
        ["S107", "12/20", "84" , "-"],
        ["S205", "5/30", "72", "-"],
        ["C216", "0/30", "70","-"],
        ["G008", "12/15", "80","-"],
    ];

    return (
        <main className="main-content">
            <Header />
            <Table title="Disciplinas" columns={["Código Disc.", "Frequencia", "NP1", "NP2"]} data={Disciplinas} />
        </main>
    );
}

export default Disciplina;
