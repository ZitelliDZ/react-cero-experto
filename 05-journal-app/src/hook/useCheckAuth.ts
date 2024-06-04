import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../config/firebase/firebase";
import { login } from "../store/auth/authSlice";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return;

      const { uid, displayName, email, photoURL } = user;
      dispatch(login({ uid, displayName, email, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return { status };
};
