import { CircularProgress, Grid } from "@mui/material"


export const CheckingAuth = () => {
  return (
    <>
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh', backgroundColor: "primary.main", padding: 5 }}
    >
        <Grid container 
        direction={"row"}
        justifyContent={"center"}
        
        >
            <CircularProgress color="warning" size={100} />
        </Grid>

      
    </Grid>
    </>
  )
}
