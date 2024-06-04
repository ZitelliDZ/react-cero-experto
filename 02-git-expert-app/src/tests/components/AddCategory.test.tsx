import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor del input", () => {
    render(<AddCategory handleAdd={() => {}} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "Hola" } });
    expect(input.value).toBe("Hola");

    //screen.debug();
  });

  test("debe de llamar handleAdd si el input tiene un valor", () => {
    const inputValue = "Nuevo valor";
    const handleAdd = jest.fn();

    render(<AddCategory handleAdd={handleAdd} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;

    fireEvent.input(input, { target: { value: inputValue } });
    // screen.debug();
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(handleAdd).toHaveBeenCalled();
    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(inputValue);
  });


  test("NO debe de llamar handleAdd si el input está vacío", () => {
    const handleAdd = jest.fn();
    const inputValue = "";

    render(<AddCategory handleAdd={handleAdd} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(handleAdd).not.toHaveBeenCalled();
  });
});
