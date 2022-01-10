
import { connect } from 'react-redux';

import { decrementAction } from '../actions'

function B({ counter, decrement }) {
    return (
      <div>
        <h1>B</h1>
        {counter}<br />
        <button onClick={decrement}>-</button>
      </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispastch) => ({
    decrement: () => { dispastch(decrementAction) }
});

export default connect(mapStateToProps, mapDispatchToProps)(B);