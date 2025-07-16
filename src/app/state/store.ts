'use client'
import { configureStore } from "@reduxjs/toolkit";
import navStateSlice from "./navState/navStateSlice";

export const store = configureStore({
    reducer: {
        navState: navStateSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;