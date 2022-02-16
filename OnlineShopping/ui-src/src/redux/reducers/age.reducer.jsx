import * as acttionType from "../actions";

const initialState = {
    counter: 0
}

const ageReducer = (state = initialState, action) => {
    switch (action.type) {
        case acttionType.ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case acttionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state
    }
}
export default ageReducer;