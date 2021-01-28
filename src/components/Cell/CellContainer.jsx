import Cell from './Cell';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    // Translate Redux state into React props
    return {
        // propName seen by React : value-in-state
        value: state.value,
        canHighlight: state.canHighlight

    }
}

export default connect(mapStateToProps)(Cell);