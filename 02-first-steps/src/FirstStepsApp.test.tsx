/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, test, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="ItemCounter"></div>);
});

vi.mock('./shopping-cart/ItemCounter', () =>({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
    afterEach(() =>{
        vi.clearAllMocks();
    });

    test('Should match snapshot', () =>{
        const { container } = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    }); 

    test('Should render the correct number ItemCounter component', () =>{
        render(<FirstStepsApp/>);
        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(5);
    }); 

    test('Should render ItemCounter with correct props', () =>{
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(5);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Mesa',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Vaso',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Tenedor',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Cuchillo',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Cuchara',
            quantity: 1
        });
    }); 
});