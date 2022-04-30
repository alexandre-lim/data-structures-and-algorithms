import { TreeNode } from '.';

test('TreeNode class', () => {
  //      50
  //    /    \
  //  25      75
  const node1 = new TreeNode(25);
  const node2 = new TreeNode(75);

  const root = new TreeNode(50, node1, node2);

  expect(root.value).toBe(50);
  expect(root.leftChild?.value).toBe(25);
  expect(root.rightChild?.value).toBe(75);
});

describe('TreeNode', () => {
  let root: TreeNode<unknown> | null = null;

  beforeEach(() => {
    /*                      50
     *                 /          \
     *               25            75
     *             /    \        /    \
     *           10      33     56     89
     *          /  \    /  \   /  \   /  \
     *         4   11  30  40 52  61 82  95
     */

    // Left side
    const nodeLeft30 = new TreeNode(30);
    const nodeLeft40 = new TreeNode(40);
    const nodeLeft33 = new TreeNode(33, nodeLeft30, nodeLeft40);

    const nodeLeft4 = new TreeNode(4);
    const nodeLeft11 = new TreeNode(11);
    const nodeLeft10 = new TreeNode(10, nodeLeft4, nodeLeft11);

    const nodeLeft25 = new TreeNode(25, nodeLeft10, nodeLeft33);

    // Right side
    const nodeRight82 = new TreeNode(82);
    const nodeRight95 = new TreeNode(95);
    const nodeRight89 = new TreeNode(89, nodeRight82, nodeRight95);

    const nodeRight52 = new TreeNode(52);
    const nodeRight61 = new TreeNode(61);
    const nodeRight56 = new TreeNode(56, nodeRight52, nodeRight61);

    const nodeRight75 = new TreeNode(75, nodeRight56, nodeRight89);

    root = new TreeNode(50, nodeLeft25, nodeRight75);
  });

  afterEach(() => {
    root = null;
  });

  it('should return the found node or null on search', () => {
    expect(root?.search(15, root)).toBeNull();
    expect(root?.search(61, root)).toBeTruthy();
  });

  it('should insert new node', () => {
    expect(root?.search(45, root)).toBeNull();

    root?.insert(45, root);

    expect(root?.search(45, root)?.value).toBe(45);
    expect(root?.leftChild?.rightChild?.rightChild?.rightChild?.value).toBe(45);
  });

  it('should delete a node with no children', () => {
    expect(root?.search(4, root)).toBeTruthy();

    root?.delete(4, root);

    expect(root?.search(4, root)).toBeNull();
  });

  it('should delete a node with one child and plug the child into the spot where the deleted node was', () => {
    expect(root?.search(4, root)).toBeTruthy();
    expect(root?.search(25, root)?.leftChild?.value).toBe(10);

    root?.delete(4, root);
    root?.delete(10, root);

    expect(root?.search(4, root)).toBeNull();
    expect(root?.search(10, root)).toBeNull();

    expect(root?.search(25, root)?.leftChild?.value).toBe(11);
    expect(root?.search(11, root)?.leftChild).toBeNull();
    expect(root?.search(11, root)?.rightChild).toBeNull();
  });

  it('should delete a node with two children and replace the deleted node with the successor node', () => {
    expect(root?.search(56, root)).toBeTruthy();
    expect(root?.search(75, root)?.leftChild?.value).toBe(56);

    root?.delete(56, root);

    expect(root?.search(56, root)).toBeNull();
    expect(root?.search(75, root)?.leftChild?.value).toBe(61);
    expect(root?.search(61, root)?.leftChild?.value).toBe(52);

    expect(root?.value).toBe(50);

    root?.delete(50, root);

    expect(root?.value).toBe(52);
    expect(root?.search(61, root)?.leftChild).toBeNull();
  });

  it('should delete a node with two children and replace the deleted node with the successor node and manage the former right child of successor node', () => {
    expect(root?.search(56, root)).toBeTruthy();
    expect(root?.search(75, root)?.leftChild?.value).toBe(56);

    root?.delete(56, root);

    expect(root?.search(56, root)).toBeNull();
    expect(root?.search(75, root)?.leftChild?.value).toBe(61);
    expect(root?.search(61, root)?.leftChild?.value).toBe(52);

    root?.insert(55, root);

    expect(root?.value).toBe(50);

    root?.delete(50, root);

    expect(root?.value).toBe(52);
    expect(root?.search(61, root)?.leftChild?.value).toBe(55);
  });

  it('should traverse the tree in ascending order', () => {
    expect(root?.traverseInAscendingOrder(root)).toMatchInlineSnapshot(`
      Array [
        4,
        10,
        11,
        25,
        30,
        33,
        40,
        50,
        52,
        56,
        61,
        75,
        82,
        89,
        95,
      ]
    `);
  });
});
