export function linearSearch(array: Array<number>, searchValue: number) {
  for (const [index, element] of array.entries()) {
    if (element === searchValue) return index;
    if (element > searchValue) break;
  }
  return null;
}

export function binarySearch(array: Array<number>, searchValue: number) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    const midpoint = Math.floor((upperBound + lowerBound) / 2);
    const valueAtMidpoint = array[midpoint];

    if (searchValue === valueAtMidpoint) return midpoint;
    if (searchValue < valueAtMidpoint) upperBound = midpoint - 1;
    if (searchValue > valueAtMidpoint) lowerBound = midpoint + 1;
  }

  return null;
}
