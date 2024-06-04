import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlices";
import { calendarSlice } from "./calendar/calendarSlice";


export const store = configureStore({
    reducer: {
        // Define a top-level state field named `calendar` that reducers will be responsible for
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});