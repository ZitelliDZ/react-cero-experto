import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({children, title=''}:any) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignContent={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          container
          direction={"column"}
          className="box-shadow"
          sx={{ backgroundColor: "white", borderRadius: 2, padding: 4 }}
          xs={11}
          md={6}
          lg={4}
        >
          <Typography variant="h5" sx={{ mb: 5 }}>
            {title}
          </Typography>
            {children}
        </Grid>
      </Grid>
    </>
  );
};
