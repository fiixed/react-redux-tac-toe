import Board from './Board';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    // Translate Redux state into React props
    return {
        // propName seen by React : value-in-state
        cellValues: state.cellValues,
        canHighlight: state.canHighlight

    }
}

export default connect(mapStateToProps)(Board);