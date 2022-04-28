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
    expect(root?.search(61, root)?.value).toBe(61);
  });

  it('should insert new node', () => {
    expect(root?.search(45, root)?.value).toBeUndefined();
    root?.insert(45, root);
    expect(root?.search(45, root)?.value).toBe(45);
    expect(root?.leftChild?.rightChild?.rightChild?.rightChild?.value).toBe(45);
  });
});
