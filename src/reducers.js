import {
	SET_SYMBOL,
	
} from './actions';

export function tictactoe(state, action) {
	switch(action.type) {
		case SET_SYMBOL:
			return {
                ...state
			}
		default:
            return state;
	}
}