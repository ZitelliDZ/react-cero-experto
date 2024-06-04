import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../auth/routes/PublicRoute";
import { AuthContext } from "../../auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PublicRoutes", () => {
  test("debe de mostrar el componente si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <div>Public Route</div>
        </PublicRoute>
      </AuthContext.Provider>
    );

    screen.debug();
    expect(screen.getByText("Public Route")).toBeTruthy();
  });

  test("debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Diego",
        id: "54321",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>

            <Routes>
                <Route path="login" element={<PublicRoute>
            <div>Public Route</div>
          </PublicRoute>} />
                <Route path="marvel" element={<h1>Marvel</h1>} />
            </Routes>

          
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();
    expect(screen.queryByText("Public Route")).toBeNull();
    expect(screen.getByText("Marvel")).toBeTruthy();
  });
});
