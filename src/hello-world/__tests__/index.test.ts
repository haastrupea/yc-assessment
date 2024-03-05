import { greeting } from '..';

describe('A function that return text', () => {
  it('should return "Hello World!" text as value', () => {
    const expectedValue = 'Hello World!';

    const actualValue = greeting();

    expect(actualValue).toEqual(expect.stringContaining(expectedValue));
  });
});
