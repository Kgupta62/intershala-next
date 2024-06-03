import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    student: null,
    error: null,
};

export const studentSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        IsLoading: (state, action) => {
            state.isLoading = true;
        },
        SetUser: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.student = action.payload;
            state.error = null;
        },
        RemoveUser: (state, action) => {
            state = {
                isLoading: false,
                isAuthenticated: false,
                student: null,
                error: null,
            };
        },
    },
});

export const { SetUser, RemoveUser } = studentSlice.actions;

export default studentSlice.reducer;
