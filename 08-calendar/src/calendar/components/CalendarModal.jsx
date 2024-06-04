import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from "date-fns/locale/es";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  let subtitle;

  const {  activeEvent, startSavingEvent } = useCalendarStore();
  
  const { isDateModalOpen, closeDateModal, openDateModal } = useUiStore()
  
  const [formSubmit, setFormSubmit] = useState(false)

  const [fomrValues, setFomrValues] = useState({
    title: "Evento",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if(!formSubmit) {
        return '';
    }
    return fomrValues.title.trim().length < 2 ? 'is-invalid' : 'is-valid';
    }, [fomrValues.title,formSubmit])


  const onInputChange = ({ target }) => {
    setFomrValues({
      ...fomrValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (e, changing) => {
    setFomrValues({
      ...fomrValues,
      [changing]: e,
    });
  };

  useEffect(() => {
    if(activeEvent !== null) {
        setFomrValues({...activeEvent});
    }else{

    }
  }, [activeEvent])
  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    closeDateModal();
    
  }


  const onSubmit =async (e) => {
    e.preventDefault();
    setFormSubmit(true);
    
    const difference = differenceInSeconds(fomrValues.end, fomrValues.start);
    
    if(isNaN(difference)||(difference < 1000)) {

        return Swal.fire('Error', 'La fecha fin debe ser mayor a la fecha de inicio', 'error');

    }

    if(fomrValues.title.trim().length < 2) return;

    await startSavingEvent(fomrValues);
    closeModal();
    setFormSubmit(false);
    
  }

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className={"modal"}
      overlayClassName={"modal-fondo"}
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={fomrValues.start}
            className="form-control"
            onChange={(date) => onDateChange(date, "start")}
            dateFormat={"Pp"}
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={fomrValues.end}
            className="form-control w-100"
            onChange={(date) => onDateChange(date, "end")}
            dateFormat={"Pp"}
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={fomrValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={fomrValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
