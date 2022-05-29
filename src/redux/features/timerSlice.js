import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timer: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        notes:""
    },
    reminderData: ""
};

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setTimer: (state, action) => ({
            ...state, timer: action.payload
        }),
        setReminderData: (state, action) => ({
            ...state, reminderData: action.payload
        }),
        reset: (state) => { state = initialState }
    },
});

export const { setTimer, setReminderData, reset } = timerSlice.actions;

export default timerSlice.reducer;
