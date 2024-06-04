import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useForm } from "../../hook/useForm";
import { useEffect, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startSavingImageCoudinary } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const NoteView = () => {

  
  const dispatch = useDispatch();
  const { active,saveMessage, isSaving  } = useSelector((state) => state.journal);



  const fileInputRef = useRef<HTMLInputElement>(null);

  const { formState, onInputChange, onResetForm } = useForm({
    title: active?.title,
    body: active?.body,
  });
 
  
  useEffect(() => {
    dispatch( setActiveNote(formState) );
}, [formState])

  const handleClickSave = () => {
    dispatch(startSaveNote());
  };

  const onFileChange = (e) => {
    const files = e.target.files;
    if (files.length == 0)  return;

    dispatch(startSavingImageCoudinary( files));

  };

  useEffect(() => {
    
    if (saveMessage) {
      Swal.fire({
        title: "Guardado",
        text: saveMessage,
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [saveMessage]);
  
  return (
    <Grid
    
    className="animate__animated animate__fadeIn animate__faster"
      container
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          {moment(active?.date).format("MMMM Do YYYY")}
        </Typography>
      </Grid>

      <Grid item>
        <input
        ref={fileInputRef}  
        onChange={onFileChange}       
        type="file" id="file" multiple 
        style={{ display: "none" }}       
        />
        
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{ mr: 2 }}
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined sx={{ fontSize: 30 }} />
        </IconButton>
        <Button sx={{ padding: 2 }} onClick={handleClickSave}
        disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 2 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          label="Título"
          fullWidth
          variant="filled"
          placeholder="Ingrese un título"
          name="title"
          value={formState.title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          fullWidth
          variant="filled"
          placeholder="¿Que sucedió hoy?"
          multiline
          name="body"
          value={formState.body}
          onChange={onInputChange}
          minRows={5}
        />
      </Grid>

      

      <ImageGallery  images = {active?.imageUrls } />
    </Grid>
  );
};
