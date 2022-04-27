export class CustomNode<T> {
  private _data: T;
  private _nextNode: CustomNode<T> | null = null;
  private _previousNode: CustomNode<T> | null = null;

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

  public set previousNode(node: CustomNode<T> | null) {
    this._previousNode = node;
  }

  public get previousNode(): CustomNode<T> | null {
    return this._previousNode;
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

export class DoublyLinkedList<T> {
  private _firstNode: CustomNode<T> | null;
  private _lastNode: CustomNode<T> | null;

  constructor(firstNode: CustomNode<T> | null = null, lastNode: CustomNode<T> | null = null) {
    this._firstNode = firstNode;
    this._lastNode = lastNode;
  }

  public get firstNode() {
    return this._firstNode;
  }

  public insertAtEnd(value: T) {
    const newNode = new CustomNode(value);

    if (!this._firstNode) {
      this._firstNode = newNode;
      this._lastNode = newNode;
    } else {
      newNode.previousNode = this._lastNode;
      this._lastNode ? (this._lastNode.nextNode = newNode) : null;
      this._lastNode = newNode;
    }
  }

  public removeFromFront() {
    if (!this._firstNode) return null;
    const removedNode = this._firstNode;
    this._firstNode = this._firstNode?.nextNode;
    return removedNode;
  }
}

export class Queue<T> {
  private _data: DoublyLinkedList<T> = new DoublyLinkedList();

  public enqueue(value: T) {
    this._data.insertAtEnd(value);
  }

  public dequeue() {
    const removedNode = this._data.removeFromFront();
    return removedNode?.data ?? null;
  }

  public read() {
    if (!this._data.firstNode) return null;
    return this._data.firstNode.data;
  }
}
