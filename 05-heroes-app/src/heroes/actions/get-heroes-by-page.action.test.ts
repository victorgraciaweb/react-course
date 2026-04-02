import { beforeEach, describe, expect, test } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';

import { heroApi } from '../api/hero.api';
import { getHeroesByPageAction } from './get-heroes-by-page.action';

const BASE_URL = import.meta.env.VITE_API_URL;

describe('getHeroesByPageAction', () => {
  const heroesApiMock = new AxiosMockAdapter(heroApi);

  beforeEach(() => {
    heroesApiMock.reset();
  });

  test('Should return Heroes by default', async () => {
    heroesApiMock.onGet('/').reply(200, {
      total: 2,
      pages: 1,
      heroes: [
        {
          id: '31',
          name: 'Victor Fries',
          image: '31.jpg',
        },
        {
          id: '32',
          name: 'Bizarro',
          image: '32.jpg',
        },
      ],
    });

    const response = await getHeroesByPageAction(1);

    expect(response).toStrictEqual({
      total: 2,
      pages: 1,
      heroes: [
        {
          id: '31',
          name: 'Victor Fries',
          image: `${BASE_URL}/images/31.jpg`,
        },
        {
          id: '32',
          name: 'Bizarro',
          image: `${BASE_URL}/images/32.jpg`,
        },
      ],
    });
  });

  test('Should return properly Heroes when page is not a number', async () => {
    const mockResponse = {
      total: 2,
      pages: 1,
      heroes: [],
    };

    heroesApiMock.onGet('/').reply(200, mockResponse);

    await getHeroesByPageAction('ABC' as unknown as number);

    const params = heroesApiMock.history.get[0].params;
    expect(params).toStrictEqual({
      category: 'all',
      limit: 6,
      offset: 0,
    });
  });

  test('Should call the api with correct params', async () => {
    const mockResponse = {
      total: 2,
      pages: 1,
      heroes: [],
    };

    heroesApiMock.onGet('/').reply(200, mockResponse);

    await getHeroesByPageAction(2, 1, 'heroes');

    const params = heroesApiMock.history.get[0].params;
    expect(params).toStrictEqual({
      category: 'heroes',
      limit: 1,
      offset: 1,
    });
  });
});
