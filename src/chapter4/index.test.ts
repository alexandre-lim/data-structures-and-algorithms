import { bubbleSort, hasDuplicateValue } from '.';

test('bubbleSort should return a sorted array', () => {
  const unsortedArray = [86, 13, 109, 18, 23, 1564, 12, 13];
  bubbleSort(unsortedArray);
  expect(unsortedArray).toMatchInlineSnapshot(`
    Array [
      12,
      13,
      13,
      18,
      23,
      86,
      109,
      1564,
    ]
  `);

  const sortedArray = [15, 24, 53, 92, 166];
  bubbleSort(sortedArray);
  expect(sortedArray).toMatchInlineSnapshot(`
    Array [
      15,
      24,
      53,
      92,
      166,
    ]
  `);
});

describe('hasDuplicateValue', () => {
  it('should return true', () => {
    const arrayWithDuplicate = [1, 5, 3, 9, 1, 4];
    expect(hasDuplicateValue(arrayWithDuplicate)).toBe(true);
  });

  it('should return false', () => {
    const arrayWithDuplicate = [1, 5, 3, 9, 8, 4];
    expect(hasDuplicateValue(arrayWithDuplicate)).toBe(false);
  });
});
