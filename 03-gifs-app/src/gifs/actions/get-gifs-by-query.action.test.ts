import { beforeEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphyApi } from '../api/giphy.api';

import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';

describe('getGifsByQuery', () => {
  let axiosMock = new AxiosMockAdapter(giphyApi);

  // Reset mock in every test
  beforeEach(() => {
    axiosMock = new AxiosMockAdapter(giphyApi);
  });

  test('Should return list gifs', async () => {
    axiosMock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('Should return an empty list if query is empty', async () => {
    //We restore mock and we use real functionality
    axiosMock.restore();

    const gifs = await getGifsByQuery('');

    expect(gifs.length).toBe(0);
  });

  test('Should handle an error when API return an error', async () => {
    const consoleSpyError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    axiosMock.onGet('/search').reply(400, {
      data: {
        message: 'bad request',
      },
    });

    await getGifsByQuery('goku');

    expect(consoleSpyError).toHaveBeenCalled();
    expect(consoleSpyError).toHaveBeenCalledWith(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 400,
        }),
      })
    );
  });
});
