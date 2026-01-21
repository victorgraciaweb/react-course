import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('Should render firsName and lastName', () =>{
        const { container } = render(<MyAwesomeApp/>);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Victor');
        expect(h3?.innerHTML).toContain('Gracia Magallon');
    }); 

    test('Should to match snapshot', () =>{
         const { container } = render(<MyAwesomeApp/>);
         
         expect(container).toMatchSnapshot();
    });
});