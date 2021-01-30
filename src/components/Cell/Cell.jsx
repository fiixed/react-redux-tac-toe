import React, { useEffect } from 'react';
import classNames from 'classnames';

import './Cell.css';

export default function Cell(props) {

     // componentDidUpdate(), watching a variable
    //  useEffect(() => {
    //     console.log(`cellValue is now ${props.value}`);
    // }, [props.value]);
    
    // componentDidMount()
    useEffect(() => {
        console.log('This is ');
    }, []);

    // componentDidUpdate()
    useEffect(() => {
        console.log('a stupid requirement');
    });
    
    const cellClasses = classNames({
        cell: true,
        winner: props.canHighlight
    });
    
    const cellContentClasses = classNames({
        'cell-content': true,
        populated: props.value
    });

    
    return (
        <button className={cellClasses} onClick={props.onClick}>
            <span className={cellContentClasses}>{props.value}</span>
        </button>
    )
}
