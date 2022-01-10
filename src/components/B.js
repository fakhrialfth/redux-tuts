// Hooks
import { useSelector, useDispatch } from 'react-redux';

import { decrementAction } from '../actions'

function B() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>B</h1>
      {counter}<br />
      <button onClick={() => { dispatch(decrementAction) }}>-</button>
    </div>
  )
}


export default B;