import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('MathHelper', () => {

    const a: number = 5;
    const b: number = 5;

    describe('Add', () =>{
        test('Should return result sum', () =>{
            const result = add(a, b);
            expect(result).toEqual(a + b);
        }); 
    });
    
    describe('Subtract', () =>{
        test('Should return result rest', () =>{
            const result = subtract(a, b);
            expect(result).toEqual(a - b);
        }); 
    });

    describe('Multiply', () =>{
        test('Should return result multiply', () =>{
            const result = multiply(a, b);
            expect(result).toEqual(a * b);
        }); 
    });

    describe('Divide', () =>{
        test('Should return result divide', () =>{
            const result = divide(a, b);
            expect(result).toEqual(a / b);
        }); 
    });
});