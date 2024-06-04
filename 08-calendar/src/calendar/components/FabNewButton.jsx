import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore"





export const FabNewButton = () => {

    const { openDateModal } = useUiStore();

    const { setActiveEvent } = useCalendarStore();

    const handdleClick = () => {
        setActiveEvent({
            title: "Evento",
            notes: "",
            start: new Date(),
            end: addHours(new Date(), 2),
            user:{
                _id: "123",
                name: "Fernando"}
        });        
        openDateModal();
    }

  return (
    <div>
      <button className="btn btn-primary fab" onClick={ handdleClick }>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
}
