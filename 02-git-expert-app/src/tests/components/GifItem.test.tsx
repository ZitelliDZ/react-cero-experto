import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components"; 



describe('Pruebas en <GifItem />', () => {

    const title = 'Un titulo';
    const url = 'https://one-punch.com/';
     

    test('debe de hacer match con el snapshot', () => {
        const {container } = render(<GifItem  title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el alt indicados', () => {
        const {  } = render(<GifItem  title={title} url={url} />);
        // screen.debug();
        expect((screen.getByRole('img') as HTMLImageElement).src).toBe(url);
        expect((screen.getByRole('img') as HTMLImageElement).alt).toBe(title);


        const { src, alt } = (screen.getByRole('img') as HTMLImageElement);
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem  title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
 

});
