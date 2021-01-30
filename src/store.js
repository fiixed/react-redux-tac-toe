import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
    cellValues: ['', '', '', '', '', '', '', '', ''],
    xIsNext: true,
    isGameOver: false,
    numberOfTurnsLeft: 9,
    winningCombination: [],
};

export const store = createStore(tictactoe, initialState);