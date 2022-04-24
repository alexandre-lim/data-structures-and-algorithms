import { anagramOf, numberOfPath, reverse } from '.';

test('reverse string', () => {
  expect(reverse('abcde')).toBe('edcba');
  expect(reverse('reverse')).toBe('esrever');
  expect(reverse('a')).toBe('a');
  expect(() => reverse('')).toThrowErrorMatchingInlineSnapshot(`"Empty string not authorized"`);
});

describe('numberOfPath', () => {
  it('should return 0', () => {
    expect(numberOfPath(-2)).toBe(0);
  });

  it('should return 1', () => {
    expect(numberOfPath(0)).toBe(1);
    expect(numberOfPath(1)).toBe(1);
  });

  it('should return 4', () => {
    expect(numberOfPath(3)).toBe(4);
  });

  it('should return 7', () => {
    expect(numberOfPath(4)).toBe(7);
  });
});

test('anagramOf', () => {
  expect(anagramOf('abc')).toMatchInlineSnapshot(`
    Array [
      "abc",
      "bac",
      "bca",
      "acb",
      "cab",
      "cba",
    ]
  `);

  expect(anagramOf('abcd')).toMatchInlineSnapshot(`
    Array [
      "abcd",
      "bacd",
      "bcad",
      "bcda",
      "acbd",
      "cabd",
      "cbad",
      "cbda",
      "acdb",
      "cadb",
      "cdab",
      "cdba",
      "abdc",
      "badc",
      "bdac",
      "bdca",
      "adbc",
      "dabc",
      "dbac",
      "dbca",
      "adcb",
      "dacb",
      "dcab",
      "dcba",
    ]
  `);
});
