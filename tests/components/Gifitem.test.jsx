import  { render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    test(`debe hacer match con el snapshot`, () => {    
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    } );

    test('debe mostrar la imagen con la url y alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        screen.debug()
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });
    test('debe mostrar el titulo en el parrafo', () => {
        render(<GifItem title={title} url={url} />);
        const p = screen.getByText(title);
        expect(p).toBeTruthy();
    });
}
);