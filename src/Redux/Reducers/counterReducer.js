const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'increment': return {...state.counter, counter: state.counter + action.payload }
        case 'decrement': return {...state.counter, counter: state.counter - action.payload }
        default: return state
    }
}

export default counter;