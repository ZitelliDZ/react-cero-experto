import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore"





export const FabDeleteButton = () => {

    const { openDateModal } = useUiStore(); 

    const { activeEvent,startRemoveEvent } = useCalendarStore();

    const handdleClick = () => {
      startRemoveEvent();
    }

  return (
    <div>
      <button className="btn btn-danger fab-danger" onClick={ handdleClick }>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
