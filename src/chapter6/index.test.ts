import { insertionSort } from '.';

test('insertionSort', () => {
  const array = [4, 2, 7, 1, 3];
  const result = insertionSort(array);

  expect(result).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
      4,
      7,
    ]
  `);
});
