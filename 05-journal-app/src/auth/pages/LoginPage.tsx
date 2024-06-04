import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"; 
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hook/useForm";
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";  
import { useMemo } from "react";

const initialFormState = {
  email: "",
  password: "",
}

export const LoginPage = () => {


  const { status,errorMessage } = useSelector((state) => state.auth);

  const isAutencticated = useMemo(() => status === "checking", [status]); 

  const dispatch = useDispatch();

  const { formState, onInputChange, onResetForm } = useForm( initialFormState );

  const { email, password } = formState;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
    onResetForm();
  };

  const onGoogleLogin = async() => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() ); 
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}
      
      className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2} xs={12}> 
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              className="input"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="*********"
              className="input"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            container
            xs={12}
            spacing={2}
            sx={{ mb: 2, mt: 2 }}
            style={{ marginLeft: "0px" }}
          >
          <Alert severity="error" xs={12} sx={{ display: !!errorMessage ? "" : "none" }}>
            {errorMessage}
          </Alert>
            <Grid item xs={12} md={6} lg={6}>
              <Button 
              disabled={isAutencticated}
              
              variant="contained" color="primary" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Button variant="contained" color="primary" fullWidth onClick={onGoogleLogin}
              disabled={isAutencticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"} xs={12}>
            <Link to="/auth/register" color={"inherit"} component={RouterLink}>
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
