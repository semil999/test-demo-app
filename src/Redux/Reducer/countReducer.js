import { MINUS, PLUS } from "../type"

const initialState = {
    count: 11,
    ary: []
}

const countReducer = (state = initialState, action) => {
    switch(action.type){
        case PLUS:
            return {
                count: state.count + 1
            }

        case MINUS:
            return {
                count: state.count - 1
            }

        default:
            return state
    }
}

export default countReducer