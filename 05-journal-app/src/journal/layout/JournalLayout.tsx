import { Box, Toolbar } from "@mui/material"
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";


const drawerWidth = 340;


const JournalLayout = ({children}:any) => {
  return (
    <Box sx={{ display: 'flex'}}
    
    className="animate__animated animate__fadeIn animate__faster"
    >

        {/* Navbar drawerWidth */}
            <Navbar drawerWidth={drawerWidth}/>
        {/* Sidebar drawerWidth */}
        <Sidebar drawerWidth={drawerWidth}/>


        <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
            {/* Toolbar */}
            
            <Toolbar />
            {children}
        </Box>


      
    </Box>
  )
}

export default JournalLayout
