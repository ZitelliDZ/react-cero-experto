import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import NavBar from "../components/NavBar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesEsp } from "../../helpers/calendarCulture";
import CalendarEventBox from "../components/CalendarEventBox";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabNewButton } from "../components/FabNewButton";
import { FabDeleteButton } from "../components/FabDeleteButton";

 

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const { events,setActiveEvent,hasEventSelected } = useCalendarStore();

  const { openDateModal } = useUiStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "5px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (e) => {
    openDateModal();
  };
  const onSelectEvent = (e) => {
    setActiveEvent(e);
 
  };
  const onViewChanged = (e) => {};

  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEsp()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabNewButton />
      {hasEventSelected && <FabDeleteButton />}

    </>
  );
};
