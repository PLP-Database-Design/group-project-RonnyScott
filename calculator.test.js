const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
    // Addition Tests
    test('Addition of two positive numbers', () => {
        expect(add(3, 5)).toBe(8);
    });
    
    test('Addition of a positive and a negative number', () => {
        expect(add(10, -4)).toBe(6);
    });
    
    test('Addition of two decimal numbers', () => {
        expect(add(1.2, 2.3)).toBeCloseTo(3.5);
    });

    // Subtraction Tests
    test('Subtraction of two positive numbers', () => {
        expect(subtract(9, 5)).toBe(4);
    });
    
    test('Subtraction of a positive and a negative number', () => {
        expect(subtract(6, -3)).toBe(9);
    });
    
    test('Subtraction of two decimal numbers', () => {
        expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });

    // Multiplication Tests
    test('Multiplication of two positive numbers', () => {
        expect(multiply(4, 3)).toBe(12);
    });
    
    test('Multiplication by zero', () => {
        expect(multiply(7, 0)).toBe(0);
    });
    
    test('Multiplication of two decimal numbers', () => {
        expect(multiply(1.5, 2.2)).toBeCloseTo(3.3);
    });

    // Division Tests
    test('Division of two positive numbers', () => {
        expect(divide(10, 2)).toBe(5);
    });
    
    test('Division of a positive number by a negative number', () => {
        expect(divide(12, -3)).toBe(-4);
    });
    
    test('Division by zero should throw an error', () => {
        expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
});
