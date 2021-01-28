import {
	CLICK_CELL,
	
} from './actions';


export function tictactoe(state, action) {
	switch(action.type) {
		case CLICK_CELL:
            console.log(`Cell ${action.payload} clicked`);
            const newCellValues = [...state.cellValues];
            if (newCellValues[action.payload] === '') {
                newCellValues[action.payload] = state.xIsNext ? 'X' : '0';
			return {
                ...state,
                cellValues: newCellValues,
                xIsNext: !state.xIsNext
			}
        }
            
		default:
            return state;
	}
}