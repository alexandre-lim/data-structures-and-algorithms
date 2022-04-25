import { SortableArray, hasDuplicateValue } from '.';

test('SortableArray partition', () => {
  const array = [0, 5, 2, 1, 6, 3];
  const sortableArray = new SortableArray(array);
  const leftPointer = sortableArray.partition(0, array.length - 1);

  expect(leftPointer).toBe(3);
  expect(sortableArray.array).toEqual([0, 1, 2, 3, 6, 5]);
});

test('SortableArray quicksort', () => {
  const array = [0, 5, 2, 1, 6, 3];
  const sortableArray = new SortableArray(array);
  sortableArray.quicksort(0, array.length - 1);

  expect(sortableArray.array).toEqual([0, 1, 2, 3, 5, 6]);
});

test('SortableArray quickselect', () => {
  const array = [0, 50, 20, 10, 60, 30];
  const sortableArray = new SortableArray(array);
  const result = sortableArray.quickselect(1, 0, array.length - 1);
  expect(result).toBe(10);
});

test('hasDuplicateValue with presort', () => {
  const array = [5, 9, 3, 2, 4, 5, 6];
  const result = hasDuplicateValue(array);
  expect(result).toBe(true);
});
