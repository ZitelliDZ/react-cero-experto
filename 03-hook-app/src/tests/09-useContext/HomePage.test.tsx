import { act, fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";



describe("HomePage", () => {
  
  
    test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{user:null}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
    screen.debug();
  });

    test("debe de mostrar el componente con el usuario", () => {
        render(
        <UserContext.Provider
            value={{
            user: {
                id: 1,
                name: "Diego",
            },
            }}
        >
            <LoginPage />
        </UserContext.Provider>
        );
    
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe(
        JSON.stringify(
            {
            id: 1,
            name: "Diego",
            },
            null,
            3
        )
        );
    });

    test("debe de ejecutar el login", () => {
         
         const setUserMock = jest.fn();

        render(
        <UserContext.Provider
            value={{
            user:null ,
            setUser :setUserMock
            }}
        >
            <LoginPage />
        </UserContext.Provider>
        );
    
        const button = screen.getByRole("button");
        
        act(() => {
            fireEvent.click(button);
        });
        expect(setUserMock).toHaveBeenCalled();


        
        
    });
});
