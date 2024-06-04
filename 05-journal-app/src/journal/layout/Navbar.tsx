import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/auth/authSlice"
import { startLogout } from "../../store/auth/thunks"


interface NavbarProps {
    drawerWidth: number
    }

export const Navbar = ({drawerWidth = 240} : NavbarProps) => {

    const { displayName } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }
  return (
    <AppBar position="fixed"
    sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {sm:`${drawerWidth}px`} }}
    >
        <Toolbar>
            <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2,display: {sm: 'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container justifyContent="space-between" alignItems={'center'} direction={"row"}>
                <Typography variant="h6" noWrap component="div"> Journal App</Typography>
                <IconButton color='error' onClick={handleLogout}>
                    {/* Logout */}
                    <LogoutOutlined />
                </IconButton>

            </Grid>
        </Toolbar>

      
    </AppBar>
  )
}
