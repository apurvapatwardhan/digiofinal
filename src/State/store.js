import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, timerReducer } from "./reducer";


const store = configureStore({
    reducer: {
        modal: modalReducer,
        timer: timerReducer
    }
})

export default store;