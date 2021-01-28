import React from 'react';
import Cell from '../Cell/Cell';

import './Board.css';

export default function Board(props) {
    
    const cells = props.cellValues.map((value, index) => {
        return <Cell key={index} value={value} canHighlight={false} />
    });
    return (
        <div id="board">
            {cells}
        </div>
        
    )
}
