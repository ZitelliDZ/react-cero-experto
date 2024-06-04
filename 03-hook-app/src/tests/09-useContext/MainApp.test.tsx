import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router";

describe("MainApp", () => {

  test("debe de mostrar el AboutPage", () => {

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("AboutPage")).toBeTruthy();
    // que la etiqueta con href="/about" tenga la clase de active 
    const aboutLink = screen.getByRole("link", { name: "About" });
    console.log(aboutLink.classList);
    expect(aboutLink.classList).toContain("active");
    screen.debug();
  });


    test("debe de mostrar el LoginPage", () => {
    
        render(
        <MemoryRouter initialEntries={["/login"]}>
            <MainApp />
        </MemoryRouter>
        );
        expect(screen.getByText("LoginPage")).toBeTruthy();
        const loginLink = screen.getByRole("link", { name: "Login" });
        console.log(loginLink.classList);
        expect(loginLink.classList).toContain("active");

        //screen.debug();
    });

    test("debe de mostrar el HomePage", () => {
    
        render(
        <MemoryRouter initialEntries={["/"]}>
            <MainApp />
        </MemoryRouter>
        );
        expect(screen.getByText("HomePage")).toBeTruthy();
        const homeLink = screen.getByRole("link", { name: "Home" });
        console.log(homeLink.classList);
        expect(homeLink.classList).toContain("active");
        
        //screen.debug();
    });
});
