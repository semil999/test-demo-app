import { DELETE, INSERT, UPDATE } from "../type"

export const addData = (obj) => {
    return (dispatch) => {
        dispatch({
            type: INSERT,
            obj: obj
        })
    }
}

export const removeData = (index) => {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            index: index
        })
    }
}

export const updateData = (index, obj) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE,
            index: index,
            obj: obj
        })
    }
}