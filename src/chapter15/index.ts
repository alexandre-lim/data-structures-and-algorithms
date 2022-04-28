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
}
