import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

describe('MyCounterApp', () => {
  test('Should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 4'
    );

    expect(screen.getByRole('button', { name: 'Add' })).toBeDefined();
    expect(screen.getAllByRole('button', { name: 'Remove' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeDefined();
  });

  test('Should increment the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: 'Add' });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toBe('Counter: 5');
  });

  test('Should decrement the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: 'Remove' });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toBe('Counter: 3');
  });
});
