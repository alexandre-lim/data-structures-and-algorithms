import { factorial } from '.';

test('factorial', () => {
  expect(() => factorial(-1)).toThrowErrorMatchingInlineSnapshot(`"Number should be positive"`);
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(4)).toBe(24);
  expect(factorial(7)).toBe(5040);
});
