export class CustomNode<T> {
  private _data: T;
  private _nextNode: CustomNode<T> | null = null;

  constructor(data: T) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }

  public set nextNode(node: CustomNode<T> | null) {
    this._nextNode = node;
  }

  public get nextNode(): CustomNode<T> | null {
    return this._nextNode;
  }
}

export class LinkedList<T> {
  private _firstNode: CustomNode<T> | null;

  constructor(firstNode: CustomNode<T> | null) {
    this._firstNode = firstNode;
  }

  public read(index: number) {
    if (!this._firstNode) return null;

    let currentNode = this._firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      if (!currentNode.nextNode) return null;
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    return currentNode.data;
  }

  public indexOf(value: T) {
    if (!this._firstNode) return null;

    let currentNode = this._firstNode;
    let currentIndex = 0;

    do {
      if (currentNode.data === value) return currentIndex;
      if (!currentNode.nextNode) return null;
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    } while (currentNode);
  }

  public insertAtIndex(index: number, value: T) {
    if (!this._firstNode) return null;

    const newNode = new CustomNode(value);

    if (index === 0) {
      newNode.nextNode = this._firstNode;
      this._firstNode = newNode;
      return;
    }

    let currentNode = this._firstNode;
    let currentIndex = 0;

    while (currentNode.nextNode && currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  public deleteAtIndex(index: number) {
    if (!this._firstNode) return null;

    if (index === 0) {
      this._firstNode = this._firstNode.nextNode;
      return;
    }

    let currentNode = this._firstNode;
    let currentIndex = 0;

    while (currentNode.nextNode && currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    const nodeAfterDeletedNode = currentNode.nextNode?.nextNode ?? null;
    currentNode.nextNode = nodeAfterDeletedNode;
  }
}
