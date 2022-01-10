
const incrementAction = {
    type: 'counter/increment'
    // payload: 10 => menambhah angka sesuai keinginan 
    //             => gunakan action creator
}

const decrementAction = {
    type: 'counter/decrement'
}

// payload
const setNumberAction = (Number) => {
    return {
        type: 'counter/set-number',
        payload: Number
    }
}

export {
    incrementAction,
    decrementAction,
    setNumberAction
}
