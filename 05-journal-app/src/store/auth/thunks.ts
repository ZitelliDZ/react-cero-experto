import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../config/firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthenticated =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword =
  (email: string, password: string, name: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailAndPassword(
      email,
      password,
      name
    );

    if (!result.ok) return dispatch(logout({ errorMessage: result.message }));

    dispatch(login({ ...result }));
  };

export const startLoginWithEmailAndPassword =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailAndPassword(email, password);

    console.log(result);
    if (!result.ok) return dispatch(logout({ errorMessage: result.message }));

    dispatch(login({ ...result }));
  };

export const startLogout = () => async (dispatch: AppDispatch) => {
  dispatch(checkingCredentials());
  try {
    //await axios.post('/auth/logout');
    await logoutFirebase();

    dispatch(logout({ errorMessage: null }));
  } catch (error) {
    const errorMessage = error.message;
    const errorCode = error.code;

    dispatch(logout({ errorMessage }));
    console.log(error);
  }
};
