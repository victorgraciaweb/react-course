import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { renderHook } from '@testing-library/react';
import { act } from 'react';

describe('useCounter', () => {
  test('Should initialize with default value -> 10', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test('Should initialize with value setted', () => {
    const initialValue = 4;

    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test('Should increment counter when handleAdd is called', () => {
    const initialValue = 6;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(initialValue + 1);
  });

  test('Should clear counter when handleClear is called', () => {
    const initialValue = 7;

    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleAdd();
    });

    act(() => {
      result.current.handleClear();
    });

    expect(result.current.counter).toBe(initialValue);
  });

  test('Should decrement counter when handleRemove is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleRemove();
    });

    expect(result.current.counter).toBe(10 - 1);
  });
});
