import React from 'react';
import './Cell.css';

export default function Cell(props) {
    return (
        <button className="cell">
            <span className="cell-content populated">{props.value}</span>
        </button>
    )
}
