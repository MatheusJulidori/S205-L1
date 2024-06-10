import React,{ useState } from 'react';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import './Disciplina.css';

function Disciplina() {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const Disciplinas = [
        ["C214", "8/10", "85", "-"],
        ["S107", "12/20", "84" , "-"],
        ["S205", "5/30", "72", "-"],
        ["C216", "0/30", "70","-"],
        ["G008", "12/15", "80","-"],
    ];

    const professors = [
        "Prof. Christpher Lima - C214",
        "Prof. Christpher Lima - S107",  
        "Prof. Raphael Cardoso - S205",
        "Prof. Marcelo Cysneiros - C216",
        "Prof. Carlos Francisco - G008"
    ];
    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return (
        <main className="main-content">
            <Header />
            <Table title="Disciplinas" columns={["Código Disc.", "Frequencia", "NP1", "NP2"]} data={Disciplinas} />
            <div id="componentes" style={{display:'flex', justifyContent:"center", marginTop:'10px'}}>
                <md-filled-button onClick={handleOpenDialog} className="btn btn-primary" style={{ padding: '10px 20px' }}>Professores</md-filled-button>
                
                {isDialogOpen && (
                    <md-dialog open>
                        <div slot="content">
                            <ul style={{padding:'20px', listStyle:'none'}}>
                                {professors.map((professor, index) => (
                                    <li key={index}>{professor}</li>
                                ))}
                            </ul>
                        </div>
                        <div slot="actions">
                            <md-text-button onClick={handleCloseDialog} style={{padding:'10px'}}>Fechar</md-text-button>
                        </div>
                    </md-dialog>
                )}
            </div>
        </main>
    );
}

export default Disciplina;
