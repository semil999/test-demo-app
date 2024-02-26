import axios from "axios"
import { SUCCESS } from "../type";

export const getStudentData = () => {
    return (
        (dispatch) => {
            axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res) => {
                dispatch({
                    type: SUCCESS,
                    data: res.data.data
                })
            });
        }
    )
} 

export const addStudentData = (obj) => {
    return (dispatch) => {
        axios.post("https://student-api.mycodelibraries.com/api/student/add", obj).then(() => dispatch(getStudentData()));
    }
}

export const deletStudentData = (id) => {
    return (dispatch) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res) => {
            dispatch(getStudentData());
        })
    }
}

export const updateStudentData = (obj) => {
    return (dispatch) => {
        axios.post("https://student-api.mycodelibraries.com/api/student/update", obj).then(() => dispatch(getStudentData()));
    }
}