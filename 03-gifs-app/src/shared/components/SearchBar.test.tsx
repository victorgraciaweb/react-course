import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('Should render SearchBar properly', () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  test('Should call onQuery with the properly value after correct time', async () => {
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('Should just call once with last value (debounce)', async () => {
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'g' } });
    fireEvent.change(input, { target: { value: 'go' } });
    fireEvent.change(input, { target: { value: 'gok' } });
    fireEvent.change(input, { target: { value: 'goku' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith('goku');
      expect(onQuery).toHaveBeenCalledTimes(1);
    });
  });

  test('Should call onQuery when when button clicked with input value', () => {
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'saitama' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('saitama');
  });

  test('Should the input has correct placeholder value', () => {
    const value = 'Buscar gif';
    render(<SearchBar placeholder={value} onQuery={() => {}} />);

    const input = screen.getByPlaceholderText(value);
    expect(input).toBeDefined();
  });

  test('Should the input has correct placeholder value by deafult', () => {
    const value = 'Buscar';
    render(<SearchBar onQuery={() => {}} />);

    const input = screen.getByPlaceholderText(value);
    expect(input).toBeDefined();
  });
});
