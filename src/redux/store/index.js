import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "../features/timerSlice";

const store = configureStore({
  reducer: {
    timerSlice : timerSlice
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
