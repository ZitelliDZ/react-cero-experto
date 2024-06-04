
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SidebarItem } from "../components/SidebarItem"



interface NavbarProps {
    drawerWidth: number
    }
export const Sidebar = ( {drawerWidth = 240}: NavbarProps) => {

    const { displayName } = useSelector((state) => state.auth);
    const {notes} = useSelector((state) => state.journal);
  return (
    <Box
    component={'nav'}
    sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
        variant="permanent"
        open={true}
        sx={{
            display: {xs: 'block' , sm: ' '},
            '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'},
        }}
        onClose={() => {}}

        >

            <Toolbar >
                <Typography variant="h6" color="primary">
                    {displayName}
                </Typography>

            </Toolbar>
            <Divider />

            <List>
                {
                   notes.map((note:any) => (
                        <SidebarItem key={note.id} note={note} />
                    ))
                }
            </List>

        </Drawer>
      
    </Box>
  )
}

