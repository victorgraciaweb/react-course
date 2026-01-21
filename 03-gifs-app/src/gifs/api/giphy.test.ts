import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('GiphyApi', () => {
  test('Should be configured correctly', () => {
    const baseURL = giphyApi.defaults.baseURL;
    const params = giphyApi.defaults.params;

    expect(baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(params).toStrictEqual({
      lang: 'en',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
