import { describe, test, expect } from 'vitest';
import { getHeroAction } from './get-hero.action';

describe('getHeroAction', () => {
  test('Should fetch hero with a image URL properly', async () => {
    const idSlug = 'bruce-wayne';
    const heroData = await getHeroAction(idSlug);

    expect(heroData).toBeDefined();
    expect(heroData.id).toBeDefined();
    expect(heroData.name).toBe('Bruce Wayne');
    expect(heroData.image).toMatch(/^http:\/\/localhost:\d+\/images\/.+$/);
  });

  test('Should throw an error if Hero is not found', async () => {
    await expect(getHeroAction('hero-not-found')).rejects.toThrow();

    const idSlug = 'hero-not-found';

    getHeroAction(idSlug).catch((error) => {
      expect(error.status).toBe(404);
    });
  });
});
