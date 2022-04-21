export function selectionSort(array: Array<number>) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex !== i) {
      const temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}
