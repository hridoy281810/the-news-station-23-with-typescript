import { configureStore } from "@reduxjs/toolkit";
import AllNewsDataReducer from "../slice/AllNewsDataSlice";

export const store = configureStore({
    reducer: {
        newsData: AllNewsDataReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch