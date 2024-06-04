import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../shared/components";
import { AuthContext } from "../../../auth/context/AuthContext";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: mockUseNavigate,
}));

describe("Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Diego",
      id: "123",
    },
    logout: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={{ contextValue }}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();
    //no aparece el nombre del usuario
  });

  test("debe de llamar el logout y usar history", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={{ contextValue }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(contextValue.logout).toHaveBeenCalledWith("/login", {
      replace: true,
    });
    expect(screen.queryByText("Login")).toBeTruthy();
  });
});
