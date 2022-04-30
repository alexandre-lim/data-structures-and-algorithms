export class Heap {
  private _data: Array<number>;

  constructor(data: Array<number> = []) {
    this._data = data;
  }

  public get data(): ReadonlyArray<number> {
    return this._data;
  }

  public rootNode() {
    return this._data[0];
  }

  public lastNode() {
    return this._data[this._data.length - 1];
  }

  private leftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number) {
    return index * 2 + 2;
  }

  private parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  public insert(value: number) {
    this._data.push(value);

    let newNodeIndex = this._data.length - 1;

    while (newNodeIndex > 0 && this._data[newNodeIndex] > this._data[this.parentIndex(newNodeIndex)]) {
      [this._data[this.parentIndex(newNodeIndex)], this._data[newNodeIndex]] = [
        this._data[newNodeIndex],
        this._data[this.parentIndex(newNodeIndex)],
      ];

      newNodeIndex = this.parentIndex(newNodeIndex);
    }
  }

  public delete() {
    const poppedValue = this._data.pop();
    if (typeof poppedValue === 'undefined') return;

    this._data[0] = poppedValue;
    let trickleNodeIndex = 0;

    while (this.hasGreaterchild(trickleNodeIndex)) {
      const largerChildIndex = this.calculateLargerChildIndex(trickleNodeIndex);

      [this._data[trickleNodeIndex], this._data[largerChildIndex]] = [
        this._data[largerChildIndex],
        this._data[trickleNodeIndex],
      ];

      trickleNodeIndex = largerChildIndex;
    }
  }

  private hasGreaterchild(index: number) {
    return (
      (this._data[this.leftChildIndex(index)] && this._data[this.leftChildIndex(index)] > this._data[index]) ||
      (this._data[this.rightChildIndex(index)] && this._data[this.rightChildIndex(index)] > this._data[index])
    );
  }

  private calculateLargerChildIndex(index: number) {
    if (!this._data[this.rightChildIndex(index)]) return this.leftChildIndex(index);
    if (this._data[this.rightChildIndex(index)] > this._data[this.leftChildIndex(index)]) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }
}
