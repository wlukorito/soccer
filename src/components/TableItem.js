import React from 'react';

const TableItem = ({ record, teams, postn}) => {
    return (
        <tr>
            <th scope="row">{postn}</th>
            <td>{teams.get(record.team)}</td>
            <td>{record.gamesPlayed}</td>
            <td>{record.goalScored}</td>
            <td>{record.goalConceded}</td>
            <td>{record.goalDiff}</td>
            <td>{record.points}</td>
        </tr>
    );
};

export default TableItem;
