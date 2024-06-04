import { TurnedIn, TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SidebarItem = ({ note }: any) => {

    const dispatch = useDispatch(); 
    const { active } = useSelector((state) => state.journal);

    const isActive = active?.id === note.id;

    const newTitle = useMemo(() => {
        return note.title.length > 17 ? note.title.slice(0, 17) + "..." : note.title;
    }, [note.title]);


    const handleActiveNote = () => {
        if(note.id !== active?.id){
            dispatch(setActiveNote(note))
        }
    }
  return (
    <ListItem disablePadding key={note.id}>
      <ListItemButton 
        onClick={handleActiveNote}
        >
        <ListItemIcon>
            { 
                isActive ? <TurnedIn color="primary" /> : <TurnedInNot />
            }
        </ListItemIcon>
        <Grid
          container
          justifyContent="space-between"
          alignItems={"center"}
          direction={"row"}
        >
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
