import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
    cellValues: ['', '', '', '', '', '', '', '', ''],
    canHighlight: false,
    winningCombination: []
};

export const store = createStore(tictactoe, initialState);