import React from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
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
            <div className="prox-aula" style={{ marginTop: 20 }}>
                <h3> <FontAwesomeIcon icon={faBell} />  Avisos</h3>
                <div className="card-aula">
                    <div className="aula-info">
                        <p>S205 | Aulas de laboratório serão assíncronas à partir do dia 20/05</p>
                        <p></p>
                    </div>
                    <div className="aula-info">
                    <p>S107 | A entrega do trabalho validará a Pv2</p>
                    <p></p>
                    </div>
                </div>
            </div>
            <Table title="Aulas de hoje" columns={["Disciplina", "Horário", "Sala"]} data={aulasHojeData} />
            <Table title="Frequência" columns={["Disciplina", "Faltas", "Limite"]} data={frequenciaData} />
            <Table title="Notas" columns={["Disciplina", "NP1", "NP2"]} data={notasData} />
            <div style={{ margin: 20, color: 'transparent' }}>.</div>
        </main>
    );
}

export default Home;
