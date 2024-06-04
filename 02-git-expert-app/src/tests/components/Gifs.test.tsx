import { render, screen } from "@testing-library/react";
import { Gifs } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <Gifs />", () => {
  const category = "One Punch";

  test("debe de mostrar el loading principal", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<Gifs category={category} />);
    expect(screen.getByText("Loading..."));

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });
    const category2 = "One Punch";
    render(<Gifs category={category2} />);
    expect(screen.getByText(category2));
  });

  test("debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<Gifs category={category} />);
  });
});
