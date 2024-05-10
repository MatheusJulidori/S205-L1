import React from 'react';
import Header from './Header';
import Table from './Table';

function MainContent() {
    const aulasHojeData = [
        ["C214-A", "19h30", "I-15"],
        ["S205", "19h30", "VI-1.3"]
    ];

    const frequenciaData = [
        ["C214-A", "4", "20"],
        ["S205", "8", "20"]
    ];

    const notasData = [
        ["C214-A", "70", "90"],
        ["S205", "85", "80"]
    ];

    return (
        <main className="main-content">
            <Header />
            <Table title="Aulas de hoje" columns={["Disciplina", "Horário", "Sala"]} data={aulasHojeData} />
            <Table title="Frequência" columns={["Disciplina", "Faltas", "Limite"]} data={frequenciaData} />
            <Table title="Notas" columns={["Disciplina", "NP1", "NP2"]} data={notasData} />
        </main>
    );
}

export default MainContent;