import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/router/AuthRoutes";
import { JournalRoutes } from "../journal/router/JournalRoutes"; 
import { CheckingAuth } from "../shared/ui/CheckingAuth"; 
import { useCheckAuth } from "../hook/useCheckAuth";

export const AppRouter = () => {

  const { status } = useCheckAuth();


  if (status === "checking") {
    return <CheckingAuth />;
  }


  return (
    <Routes>

      {
        (status === "authenticated") 
        ? <Route path="/*" element={<JournalRoutes />} />
        :  <Route path="auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      
    </Routes>
  );
};
