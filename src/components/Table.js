import React from 'react';
import TableItem from './TableItem';

const Table = props => {
    let i = 0;
    return props.table.map(record => {
        return <TableItem key={record.id} record={record} teams={props.teamNames} postn={++i}/>
    });
};

export default Table;
