import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
    describe('Render', () =>{
        const name = 'Test Item';

        test('Should render with default values', () =>{
            render(<ItemCounter name={name}/>);

            expect(screen.getByText(name)).toBeDefined();
        }); 

        test('Should render with custom quality', () =>{
            const quantity = 10;

            render(<ItemCounter name={name} quantity={quantity}/>);

            expect(screen.getByText(quantity)).toBeDefined();
        });
    });

    describe('Events', () =>{
        const name = 'Test Item';

        beforeEach(() => {
            vi.spyOn(console, 'log').mockImplementation(() => {});
        });

        test('Should increase count when +1 button is pressed', () =>{
            const quantity = 1;
            render(<ItemCounter name={name} quantity={quantity}/>);

            const [buttonAdd] = screen.getAllByRole('button');
            fireEvent.click(buttonAdd);

            expect(screen.getByText('2')).toBeDefined();
        }); 

        test('Should decrease count when -1 button is pressed', () =>{
            const quantity = 5;
            render(<ItemCounter name={name} quantity={quantity}/>);

            const [, buttonSub] = screen.getAllByRole('button');
            fireEvent.click(buttonSub);

            expect(screen.getByText('4')).toBeDefined();
        }); 

        test('Should not decrease count when -1 button is pressed if quantity is 1', () =>{
            const quantity = 1;
            render(<ItemCounter name={name} quantity={quantity}/>);

            const [, buttonSub] = screen.getAllByRole('button');
            fireEvent.click(buttonSub);

            expect(screen.getByText('1')).toBeDefined();
        });

        test('Should change to red when count is 1', () =>{
            const quantity = 1;
            render(<ItemCounter name={name} quantity={quantity}/>);

            const itemText = screen.getByText(name);
            
            expect(itemText.style.color).toBe('red')
        });

        test('Should change to black when count is greater than 1', () =>{
            const quantity = 5;
            render(<ItemCounter name={name} quantity={quantity}/>);

            const itemText = screen.getByText(name);
            
            expect(itemText.style.color).toBe('black')
        });
    }); 
});