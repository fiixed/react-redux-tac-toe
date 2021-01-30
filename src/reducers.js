import { calculateWinner } from '../src/utils/WinnerCalculator';
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
                const newNumberOfTurnsLeft = state.numberOfTurnsLeft - 1;
                const calcResult = calculateWinner(newCellValues, newNumberOfTurnsLeft, action.payload);
			return {
                ...state,
                cellValues: newCellValues,
                xIsNext: !state.xIsNext,
                isGameOver: calcResult.hasResult,
                numberOfTurnsLeft: newNumberOfTurnsLeft,
                winner: calcResult.winner,
                winningCombination: calcResult.winningCombination
			}
        }
            
		default:
            return state;
	}
}