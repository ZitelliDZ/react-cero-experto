import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvents = [
  {
    _id: "1",
    title: "My eveasdasdnt",
    notes: "This is my event",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Fernando",
    },
  },
];

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: tempEvents,
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },
    onRemoveEvent: (state, action) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onUpdateEvent: (state, action) => {
      const { id, ...newEvent } = action.payload;
      const index = state.events.findIndex((event) => event.id === id);
      state.events[index] = { ...state.events[index], ...newEvent };
      state.activeEvent = null;
    },
  },
});

export const { onAddEvent, onRemoveEvent, onUpdateEvent, onSetActiveEvent } =
  calendarSlice.actions;
