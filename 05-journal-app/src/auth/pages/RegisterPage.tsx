import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as LinkRouter } from "react-router-dom"
import { useForm } from "../../hook/useForm"
import { useMemo, useState } from "react"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"

const formValidations = {
  email: [(value)=>value.includes('@'), 'Email no válido'],
  password: [(value)=>value.length > 5, 'La contraseña debe tener al menos 6 caracteres'],

  name: [(value)=>value.length > 0, 'El nombre es requerido'],
}


export const RegisterPage = () => {

  const [ formSubmitted, setFormSubmitted ] = useState(false)

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(() => status === "checking", [status]) 

  const { formState, onInputChange, onResetForm,formValidationsState,isFormValid } = useForm({
    name: "",
    email: "",
    password: "",
  },formValidations)
 

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if(!isFormValid) return

    
    dispatch(startCreatingUserWithEmailAndPassword(formState.email, formState.password, formState.name))
    onResetForm()
  }

  return (
    <AuthLayout title="Registro">
       
      <form onSubmit={onSubmit}
      
      className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2} xs={12}>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Jhon Doe"
              className="input"
              fullWidth
              name="name"
              value={formState.name}
              onChange={onInputChange}

              error={!!formValidationsState.nameValid && formSubmitted}
              helperText={formValidationsState.nameValid}


            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              className="input"
              fullWidth
              name="email"
              value={formState.email}
              onChange={onInputChange}
              error={!!formValidationsState.emailValid && formSubmitted}
              helperText={formValidationsState.emailValid}
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
              value={formState.password}
              onChange={onInputChange}
              error={!!formValidationsState.passwordValid && formSubmitted}
              helperText={formValidationsState.passwordValid}
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
              <Button variant="contained" color="primary" fullWidth type="submit"   disabled={isCheckingAuthentication}>
                Crear
              </Button>
            </Grid> 
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"} xs={12}>
            <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta?</Typography>
            <Link to="/auth/login" color={"inherit"} component={LinkRouter}>
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
