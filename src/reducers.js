import { calculateWinner } from '../src/utils/WinnerCalculator';
import {
	CLICK_CELL, NEW_GAME,
	
} from './actions';

import { initialState } from './store';


export function tictactoe(state, action) {
	switch(action.type) {
		case CLICK_CELL:
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
        break;
        case NEW_GAME:
            return {
                ...initialState
            }
            
		default:
            return state;
	}
}