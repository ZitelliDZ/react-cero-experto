import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    const { result } = renderHook(() =>
      useFetchGifs({ category: "One Punch" })
    );

    const { images, isLoading } = result.current;
    expect(images).toEqual([]);
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imágenes y el loading en false", async () => {
    const { result } = renderHook(() =>
      useFetchGifs({ category: "One Punch" })
    );

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBe(10);
    expect(isLoading).toBe(false);
  });
});
