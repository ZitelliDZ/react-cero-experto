import { useDispatch, useSelector } from "react-redux"
import { onAddEvent, onRemoveEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";




export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state) => state.calendar);
    
    const startSavingEvent =async (event) => {

        if (event._id) {
            dispatch(onUpdateEvent({...event}));
        } else {
            dispatch(onAddEvent({...event,_id:new Date().getTime()}));
        }
    }

    const startRemoveEvent = () => {
        dispatch(onRemoveEvent());
    }
 

    const setActiveEvent = (event) => {

        dispatch(onSetActiveEvent(event));
    }

    return {
        // Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent ,

        // Methods
        startSavingEvent,
        startRemoveEvent, 
        setActiveEvent,
    };
}