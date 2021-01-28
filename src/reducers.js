import {
	CLICK_CELL,
	
} from './actions';

export function tictactoe(state, action) {
	switch(action.type) {
		case CLICK_CELL:
            console.log(`Cell clicked`);
			return {
                ...state
			}
		default:
            return state;
	}
}