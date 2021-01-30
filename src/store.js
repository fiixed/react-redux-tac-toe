import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
export const initialState = {
    cellValues: ['', '', '', '', '', '', '', '', ''],
    xIsNext: true,
    isGameOver: false,
    numberOfTurnsLeft: 9,
    winner: undefined,
    winningCombination: [],
};

export const store = createStore(tictactoe, initialState);