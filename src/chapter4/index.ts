export function bubbleSort(array: Array<number>) {
  let unsortedUntilIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
    unsortedUntilIndex -= 1;
  }
}

export function hasDuplicateValue(array: Array<number>) {
  const existingNumbers = [];

  for (let i = 0; i < array.length; i += 1) {
    if (existingNumbers[array[i]] === 1) return true;
    existingNumbers[array[i]] = 1;
  }
  return false;
}
