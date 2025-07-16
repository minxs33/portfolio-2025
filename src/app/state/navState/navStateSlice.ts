'use client'
import { createSlice } from "@reduxjs/toolkit";

interface NavStateSlice {
    isOpen: boolean;
    activeSection: string | null;
}

const initialState: NavStateSlice = {
    isOpen: false,
    activeSection: null,
};

const navStateSlice = createSlice({
    name: "navState",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
    },
})

export const { toggle, setActiveSection } = navStateSlice.actions
export default navStateSlice.reducer