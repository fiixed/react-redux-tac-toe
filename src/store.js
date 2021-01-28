import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
    cellValues: ['X', '0', 'X', '0', '0', 'X', '0', '', ''],
    canHighlight: false
};

export const store = createStore(tictactoe, initialState);