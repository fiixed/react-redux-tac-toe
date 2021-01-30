import Game from './Game';
import { connect } from 'react-redux';
import { clickCell, newGame } from '../../actions';

function mapStateToProps(state) {
    // Translate Redux state into React props
    return {
        // propName seen by React : value-in-state
        cellValues: state.cellValues,
        isGameOver: state.isGameOver,
        winner: state.winner,
        winningCombination: state.winningCombination

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (index) => {
            dispatch(clickCell(index));
        },
        startNewGame: () => {
            dispatch(newGame());
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);