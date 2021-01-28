import { createStore } from 'redux';
import { tictactoe } from './reducers';
// initial state
const initialState = {
	value: "X"
};

export const store = createStore(tictactoe, initialState);