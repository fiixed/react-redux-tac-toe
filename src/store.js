import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
    cellValues: ['X', 'X', 'X', '0', '0', 'X', '0', '', ''],
    canHighlight: false,
    winningCombination: [0, 1, 2]
};

export const store = createStore(tictactoe, initialState);