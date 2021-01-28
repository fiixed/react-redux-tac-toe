export const CLICK_CELL  = 'CLICK_CELL';

export function clickCell(index) {
  return {
    type: CLICK_CELL,
    payload: index
  };
}

