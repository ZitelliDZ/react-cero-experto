import { StarOutlineOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"





export const NothingSelectedView = () => {
  return (
    <Grid
    
    className="animate__animated animate__fadeIn animate__faster"
    container
    spacing={0}
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main' , borderRadius: 5}}
    >
    <Grid item xs={12}> 
        <StarOutlineOutlined sx={{ fontSize: 100, color: 'white'}} />  
    </Grid>
        <Grid item xs={12}> 
            <Typography variant="h5" color="white">Selecciona o crea una nueva entrada</Typography>
        </Grid>
        
      
    </Grid>
  )
}

