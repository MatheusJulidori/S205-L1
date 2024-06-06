import React from 'react';
import TableRow from './tableRow';
import './table.css'

function Table({ title, columns, data }) {
    return (
        <div className="table-section">
            <h4>{title}</h4>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <TableRow key={index} data={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
