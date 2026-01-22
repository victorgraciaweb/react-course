import { beforeEach, describe, expect, test, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import * as gifActions from '../actions/get-gifs-by-query.action';

import { useGifs } from './useGifs';

describe('useGifs', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('Should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleTermClicked).toBeInstanceOf(Function);
    expect(result.current.handleSearch).toBeInstanceOf(Function);
  });

  test('Should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('Should check if term is empty in handleSearch', async () => {
    const { result } = renderHook(() => useGifs());

    const getGifsSpy = vi.spyOn(gifActions, 'getGifsByQuery');

    await act(async () => {
      await result.current.handleSearch('');
    });

    expect(getGifsSpy).not.toHaveBeenCalled();
  });

  test('Should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('Should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
      new Error('Error'),
    );

    await act(async () => {
      await result.current.handleTermClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('Should return no more than 8 results and should be last 8', async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch('test-1');
    });

    await act(async () => {
      await result.current.handleSearch('test-2');
    });

    await act(async () => {
      await result.current.handleSearch('test-3');
    });

    await act(async () => {
      await result.current.handleSearch('test-4');
    });

    await act(async () => {
      await result.current.handleSearch('test-5');
    });

    await act(async () => {
      await result.current.handleSearch('test-6');
    });

    await act(async () => {
      await result.current.handleSearch('test-7');
    });

    await act(async () => {
      await result.current.handleSearch('test-8');
    });

    await act(async () => {
      await result.current.handleSearch('test-9');
    });

    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      'test-9',
      'test-8',
      'test-7',
      'test-6',
      'test-5',
      'test-4',
      'test-3',
      'test-2',
    ]);
  });
});
