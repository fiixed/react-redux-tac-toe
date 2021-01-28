import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
    value: "X",
    canHighlight: false
};

export const store = createStore(tictactoe, initialState);