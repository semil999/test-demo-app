import { SUCCESS } from "../type"

const initialstate = {
    ary: []
}

const apiReducer = (state = initialstate, action) => {
    switch(action.type){
        case SUCCESS:
            return {
                ary: action.data
            }
        
        default:
            return state
    }
}

export default apiReducer