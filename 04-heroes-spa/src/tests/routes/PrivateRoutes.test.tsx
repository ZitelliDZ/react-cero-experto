import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/context/AuthContext";
import { PublicRoute } from "../../auth/routes/PublicRoute";
import { PrivateRoute } from "../../auth/routes/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en PrivateRoutes", () => {
  test("debe de mostrar el componente si está autenticado y guardar localStorage", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "Diego",
        id: "123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=bat"]}>
          <PrivateRoute>
            <div>Public Route</div>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();
    expect(screen.getByText("Public Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=bat')
  });

  test("debe de bloquear el componente si no está autenticado", () => {});
});
