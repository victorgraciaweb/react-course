import { describe, expect, test } from 'vitest';
import { heroApi } from './hero.api';

const BASER_URL = import.meta.env.VITE_API_URL;

describe('HeroApi', () => {
  test('Should be configure pointing for testing server', () => {
    expect(heroApi).toBeDefined();
    expect(heroApi.defaults.baseURL).toBe(`${BASER_URL}/api/heroes`);
  });
});
