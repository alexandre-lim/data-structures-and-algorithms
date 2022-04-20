import { binarySearch, linearSearch } from '.';

describe('linearSearch', () => {
  it('should return null', () => {
    const orderedArray = [5, 8, 15, 80, 252];
    const searchNonExistantValue = 7;

    const result = linearSearch(orderedArray, searchNonExistantValue);
    expect(result).toBeNull();
  });

  it('should return index 2', () => {
    const orderedArray = [5, 8, 15, 80, 252];
    const searchValue = 15;

    const result = linearSearch(orderedArray, searchValue);
    expect(result).toBe(2);
  });
});

describe('binarySearch', () => {
  it('should return null', () => {
    const orderedArray = [5, 8, 15, 26, 80, 252, 300];
    const searchNonExistantValue = 7;

    const result = binarySearch(orderedArray, searchNonExistantValue);
    expect(result).toBeNull();
  });

  it('should return index 5', () => {
    const orderedArray = [5, 8, 15, 26, 80, 252, 300];
    const searchValue = 252;

    const result = binarySearch(orderedArray, searchValue);
    expect(result).toBe(5);
  });
});
