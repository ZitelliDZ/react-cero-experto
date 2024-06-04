import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRouter } from "../heroes/routes/HeroesRouter";
import { PrivateRoute } from "../auth/routes/PrivateRoute";
import { PublicRoute } from "../auth/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
                </Routes>
            </PublicRoute>
          }
        /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
