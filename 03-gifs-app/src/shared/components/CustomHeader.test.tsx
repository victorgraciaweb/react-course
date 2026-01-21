import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';
  let description;

  test('Should render the title properly', () => {
    const { container } = render(<CustomHeader title={title} />);
    const h1 = container.querySelector('h1');

    expect(h1?.innerHTML).toContain(title);
  });

  test('Should render description when is provided', () => {
    description = 'Test Description';

    const { container } = render(
      <CustomHeader title={title} description={description} />
    );

    const p = container.querySelector('p');

    expect(p?.innerHTML).toContain(description);
  });

  test('Should no render description when is not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    const p = container.querySelector('p');
    expect(p?.innerHTML).toBeNullable();
  });
});
