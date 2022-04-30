import { Heap } from '.';

describe('Heap', () => {
  const initialArray = [100, 88, 25, 87, 16, 8, 12, 86, 50, 2, 15, 3];
  let heap: Heap;
  beforeEach(() => {
    /*                      100
     *                 /          \
     *               88            25
     *             /    \        /    \
     *           87      16     8      12
     *          /  \    /  \   /
     *         86   50 2   15 3
     */
    const copyArray = initialArray.slice();
    heap = new Heap(copyArray);
  });

  it('should insert new node by trickling up the node', () => {
    // Root node right child
    expect(heap.data[2]).toBe(25);

    heap.insert(40);

    expect(heap.data.length).toBe(initialArray.length + 1);
    // Root node left right after trickling up
    expect(heap.data[2]).toBe(40);
    expect(heap.data).toMatchInlineSnapshot(`
      Array [
        100,
        88,
        40,
        87,
        16,
        25,
        12,
        86,
        50,
        2,
        15,
        3,
        8,
      ]
    `);
  });

  it('should delete root node by replacing root node by last node and trickling down the newly root node', () => {
    expect(heap.rootNode()).toBe(100);

    heap.delete();

    expect(heap.rootNode()).toBe(88);
    expect(heap.data).toMatchInlineSnapshot(`
      Array [
        88,
        87,
        25,
        86,
        16,
        8,
        12,
        3,
        50,
        2,
        15,
      ]
    `);
  });
});
