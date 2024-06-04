 
import { IconButton } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch, useSelector } from "react-redux"



export const JournalPage = () => {

  const dispatch = useDispatch()

  const { isSaving, active } = useSelector((state) => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
    
  return (
    <JournalLayout>
 

        {
          (!!active) 
          ? <NoteView />
          : <NothingSelectedView />
        } 

        <IconButton 
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{ 
          color: 'white',

          ':disabled': {
            backgroundColor: 'error.light',
            opacity: [0.9, 0.8, 0.7],
          },

          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.dark',
            opacity: [0.9, 0.8, 0.7],
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
         }}
         >
          <AddOutlined sx={{ fontSize: 30 }} />

         </IconButton>

        

    </JournalLayout>
  )
}
