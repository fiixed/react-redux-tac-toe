import React from 'react';
import './Cell.css';

export default function Cell(props) {
    let cellContentClasses = 'cell-content';
    return (
        <button className="cell">
            <span className="cell-content populated">{props.value}</span>
        </button>
    )
}
