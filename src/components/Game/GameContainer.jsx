import Game from './Game';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    // Translate Redux state into React props
    return {
        // propName seen by React : value-in-state
        cellValues: state.cellValues,
        winningCombination: state.winningCombination

    }
}

export default connect(mapStateToProps)(Game);