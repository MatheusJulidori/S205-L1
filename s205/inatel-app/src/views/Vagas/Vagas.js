import React from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import './Vagas.css';

function Vagas() {
    const vagas = [
        ["Volkswagen", "Desenvolvedor Backend", "Estágio"],
        ["Builders", "Desenvolvedor Frontend", "Estágio"],
        ["Huawei", "DWDF", "Estágio"],
        ["Google", "Desenvolvedor Fullstack", "Efetivo"],
        ["Facebook", "Desenvolvedor Mobile", "Efetivo"],
        ["Ocellot", "Téc. em automação", "Efetivo"],
    ];

    return (
        <main className="main-content">
            <Header />
            <Table title="Vagas" columns={["Empresa", "Posição", "Tipo de vaga"]} data={vagas} />
        </main>
    );
}

export default Vagas;
