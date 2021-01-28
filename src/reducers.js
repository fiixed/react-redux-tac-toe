import {
	CLICK_CELL,
	
} from './actions';

export function tictactoe(state, action) {
	switch(action.type) {
		case CLICK_CELL:
            console.log(`Cell ${action.payload} clicked`);
            const newCellValues = [...state.cellValues];
            newCellValues[action.payload] = "X";
			return {
                ...state,
                cellValues: newCellValues
			}
		default:
            return state;
	}
}