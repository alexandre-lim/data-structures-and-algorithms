export class TreeNode<T> {
  private _value: T;
  private _leftChild: TreeNode<T> | null;
  private _rightChild: TreeNode<T> | null;

  constructor(value: T, leftChild: TreeNode<T> | null = null, rightChild: TreeNode<T> | null = null) {
    this._value = value;
    this._leftChild = leftChild;
    this._rightChild = rightChild;
  }

  public get value() {
    return this._value;
  }

  public set value(value: T) {
    this._value = value;
  }

  public get leftChild() {
    return this._leftChild;
  }

  public set leftChild(node: TreeNode<T> | null) {
    this._leftChild = node;
  }

  public get rightChild() {
    return this._rightChild;
  }

  public set rightChild(node: TreeNode<T> | null) {
    this._rightChild = node;
  }

  public search(searchValue: T, node: TreeNode<T> | null): TreeNode<T> | null | undefined {
    if (node === null || node.value === searchValue) return node;

    if (searchValue < node.value) return this.search(searchValue, node.leftChild);

    if (searchValue > node.value) return this.search(searchValue, node._rightChild);
  }

  public insert(value: T, node: TreeNode<T>) {
    if (value < node.value) {
      if (node.leftChild === null) {
        node.leftChild = new TreeNode(value);
      } else {
        this.insert(value, node.leftChild);
      }
    } else {
      if (node.rightChild === null) {
        node.rightChild = new TreeNode(value);
      } else {
        this.insert(value, node.rightChild);
      }
    }
  }

  // One of the most complex algorithm from the book
  // To see what happens: Set a breakpoint and use VS Code JavaScript Debug Terminal to enter debug mode
  public delete(valueToDelete: T, node: TreeNode<T> | null) {
    if (node === null) return null;

    if (valueToDelete < node.value) {
      node.leftChild = this.delete(valueToDelete, node.leftChild);
      return node;
    }

    if (valueToDelete > node.value) {
      node.rightChild = this.delete(valueToDelete, node.rightChild);
      return node;
    }

    if (valueToDelete === node.value) {
      if (node.leftChild === null) return node.rightChild;
      if (node.rightChild === null) return node.leftChild;

      node.rightChild = this.lift(node.rightChild, node);
      return node;
    }
    return node;
  }

  private lift(node: TreeNode<T>, nodeToDelete: TreeNode<T>) {
    if (node.leftChild) {
      node.leftChild = this.lift(node.leftChild, nodeToDelete);
      return node;
    }

    nodeToDelete.value = node.value;
    return node.rightChild;
  }

  // This function is presented differently in the book but I kept the intention
  public traverseInAscendingOrder(node: TreeNode<T> | null, result: Array<T> = []) {
    if (node === null) return;

    this.traverseInAscendingOrder(node.leftChild, result);
    result.push(node.value);
    this.traverseInAscendingOrder(node.rightChild, result);
    return result;
  }
}
