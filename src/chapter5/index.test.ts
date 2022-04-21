import { selectionSort } from '.';

test('selectionSort', () => {
  const array = [4, 2, 7, 1, 3];
  selectionSort(array);

  expect(array).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
      4,
      7,
    ]
  `);
});
