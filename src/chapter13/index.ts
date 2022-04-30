export class SortableArray {
  private _array: number[];

  constructor(array: number[]) {
    this._array = array;
  }

  public get array(): ReadonlyArray<number> {
    return this._array;
  }

  partition(leftPointer: number, rightPointer: number) {
    const pivotIndex = rightPointer;

    const pivot = this._array[pivotIndex];

    rightPointer -= 1;

    for (;;) {
      while (this._array[leftPointer] < pivot) {
        leftPointer += 1;
      }

      while (this._array[rightPointer] > pivot) {
        rightPointer -= 1;
      }

      if (leftPointer >= rightPointer) break;

      [this._array[leftPointer], this._array[rightPointer]] = [this._array[rightPointer], this._array[leftPointer]];
      leftPointer -= 1;
    }
    [this._array[leftPointer], this._array[pivotIndex]] = [this._array[pivotIndex], this._array[leftPointer]];
    return leftPointer;
  }

  quicksort(leftIndex: number, rightIndex: number) {
    if (rightIndex - leftIndex <= 0) return;

    const pivotIndex = this.partition(leftIndex, rightIndex);

    this.quicksort(leftIndex, pivotIndex - 1);
    this.quicksort(pivotIndex + 1, rightIndex);
  }

  quickselect(kthLowestValue: number, leftIndex: number, rightIndex: number): number | undefined {
    if (rightIndex - leftIndex <= 0) return this._array[leftIndex];

    const pivotIndex = this.partition(leftIndex, rightIndex);

    if (kthLowestValue < pivotIndex) {
      return this.quickselect(kthLowestValue, leftIndex, pivotIndex - 1);
    } else if (kthLowestValue > pivotIndex) {
      return this.quickselect(kthLowestValue, pivotIndex + 1, rightIndex);
    } else if (kthLowestValue === pivotIndex) {
      return this._array[pivotIndex];
    }
  }
}

export function hasDuplicateValue(array: Array<number>) {
  array.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === array[i + 1]) return true;
  }

  return false;
}
