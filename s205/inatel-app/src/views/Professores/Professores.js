import React from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import './Professores.css';

function Professores() {
    const Professores = [
        ["Christopher Lima", "Segunda 19h30", "I-15"],
        ["Renzo Mesquita", "Quinta 19h30", "VI-1.3"],
        ["Raphael Cardoso", "Quarta 21h30", "NEMP"],
        ["Renzo Mesquita", "Quinta 19h30", "VI-1.3"],
        ["Renzo Mesquita", "Quinta 19h30", "VI-1.3"],
        ["Renzo Mesquita", "Quinta 19h30", "VI-1.3"],
    ];

    return (
        <main className="main-content">
            <Header />
            <Table title="Professores" columns={["Professor", "Horário de Atendimento", "Sala"]} data={Professores} />
        </main>
    );
}

export default Professores;
