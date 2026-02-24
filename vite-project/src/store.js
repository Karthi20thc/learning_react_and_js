// npm install @reduxjs/toolkit react-redux
// https://redux-toolkit.js.org/tutorials/quick-start


import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./features/JSONplaceholderSlice";

const store = configureStore({
    reducer:
    // This is state object  
    {
        todo: todoReducer,
    },
})

export default store;