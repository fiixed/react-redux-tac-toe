import React from 'react';

import Board from '../Board/Board';
import ResultModal from '../ResultModal/ResultModal';
import './Game.css';

export default function Game(props) {
    // const onCellClicked = (cellIndex) => {
    //     console.log(`Cell ${cellIndex} clicked`);
    // }
    return (
        <>
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board 
                    cellValues={props.cellValues}
                    winningCombination={props.winningCombination}
                    cellClicked={props.handleClick}
                />
            </div>
            <ResultModal
            isGameOver={props.isGameOver} />
            
        </>
    )
}
