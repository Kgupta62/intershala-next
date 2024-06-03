import axios from "../../axiosconfig";
import { RemoveUser, SetUser } from "../Reducers/StudentReducer";

export const setStudent = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("/");

        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student");
        dispatch(SetUser(res.data.student));
    } catch (error) {
        console.log(error);
    }
};

export const asyncsignup = (student) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student/signup", student);
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncsignin = (student) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student/signin", student);
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncsignout = (student) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student/signout");
        console.log(res);
        dispatch(RemoveUser());
    } catch (error) {
        console.log(error);
    }
};
