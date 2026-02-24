import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Async API Call -- can be moved to seperate file 
export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "http://jsonplaceholder.typicode.com/todos"
            );
            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    list: [],
    loading: false,
    success: false,
    error: null,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.list = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });

        //  For other API cases, use here
    },
});

export const { resetStatus } = todoSlice.actions;
export default todoSlice.reducer;