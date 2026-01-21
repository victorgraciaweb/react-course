import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

const counterMock = 60;
const handleAddMock = vi.fn();
const handleRemoveMock = vi.fn();
const handleClearMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: counterMock,
    handleAdd: handleAddMock,
    handleRemove: handleRemoveMock,
    handleClear: handleClearMock,
  }),
}));

describe('MyCounterApp', () => {
  test('Should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      `Counter: ${counterMock}`
    );

    expect(screen.getByRole('button', { name: 'Add' })).toBeDefined();
    expect(screen.getAllByRole('button', { name: 'Remove' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeDefined();
  });

  test('Should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: 'Add' });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
  });

  test('Should call handleRemove if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: 'Remove' });

    fireEvent.click(button);

    expect(handleRemoveMock).toBeCalled();
  });

  test('Should call handleClear if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: 'Clear' });

    fireEvent.click(button);

    expect(handleClearMock).toHaveBeenCalled();
  });
});
