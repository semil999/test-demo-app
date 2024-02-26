import { DELETE, INSERT, UPDATE } from "../type";

const initialState = {
    ary: []
}

const crudReducer = (state = initialState, action) => {
    switch(action.type){
        case INSERT:
            return {
                ary: [...state.ary, action.obj]
            };

        case DELETE:
            return {
                ary: state?.ary?.filter(x => x?.id != action?.index)
            }

        case UPDATE:
            let ary = [...state?.ary];
            ary?.splice(action?.index, 1, action?.obj);
            return {
                ary: ary
            };

        default:
            return state;
    }
}

export default crudReducer