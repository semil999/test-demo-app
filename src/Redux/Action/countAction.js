import { MINUS, PLUS } from "../type"

export const addCount = () => {
    return (dispatch) => {
        dispatch({
            type: PLUS,
        })
    }
}

export const minusCount = () => {
    return (dispatch) => {
        dispatch({
            type: MINUS,
        })
    }
}