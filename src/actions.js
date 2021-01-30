export const CLICK_CELL  = 'CLICK_CELL';
export const NEW_GAME  = 'NEW_GAME';

export function clickCell(index) {
  return {
    type: CLICK_CELL,
    payload: index
  };
}

export function newGame() {
    return {
      type: NEW_GAME
      
    };
  }

