import {render, fireEvent, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe ('Pruebas en el componente AddCategory', () => {       

test('debe mostrar el componente correctamente', () => {
    render(<AddCategory onNewCategory={()=>{}}/>);   
    const input=screen.getByRole('textbox'); 
    fireEvent.input(input, {target: {value: 'Hola Mundo'}});
    expect(input.value).toBe('Hola Mundo');

});

});