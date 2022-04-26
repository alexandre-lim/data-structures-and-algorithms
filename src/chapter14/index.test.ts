import { CustomNode, LinkedList } from '.';

test('CustomNode class', () => {
  const nodeOne = new CustomNode('once');
  const nodeTwo = new CustomNode('upon');
  const nodeThree = new CustomNode('a');
  const nodeFour = new CustomNode('time');

  nodeOne.nextNode = nodeTwo;
  nodeTwo.nextNode = nodeThree;
  nodeThree.nextNode = nodeFour;

  expect(nodeTwo.nextNode).toEqual(nodeThree);
  expect(nodeFour.nextNode).toBeNull();
});

test('LinkedList', () => {
  const nodeOne = new CustomNode('once');
  const nodeTwo = new CustomNode('upon');
  const nodeThree = new CustomNode('a');
  const nodeFour = new CustomNode('time');

  nodeOne.nextNode = nodeTwo;
  nodeTwo.nextNode = nodeThree;
  nodeThree.nextNode = nodeFour;

  const list = new LinkedList(nodeOne);

  // Read
  expect(list.read(10)).toBeNull();
  expect(list.read(1)).toBe(nodeTwo.data);

  // Search
  expect(list.indexOf('history')).toBeNull();
  expect(list.indexOf('time')).toBe(3);
  expect(list.read(3)).toBe('time');

  // Insert
  list.insertAtIndex(3, 'purple');
  expect(list.indexOf('purple')).toBe(3);
  expect(list.read(3)).toBe('purple');

  list.insertAtIndex(0, 'red');
  expect(list.indexOf('red')).toBe(0);
  expect(list.read(0)).toBe('red');

  list.insertAtIndex(11, 'blue');
  expect(list.indexOf('blue')).toBe(6);
  expect(list.read(6)).toBe('blue');
  expect(list.read(7)).toBeNull();

  // Delete
  list.deleteAtIndex(6);
  expect(list.indexOf('blue')).toBeNull();
  expect(list.read(6)).toBeNull();

  expect(list.indexOf('red')).toBe(0);
  expect(list.read(0)).toBe('red');
  expect(list.indexOf('once')).toBe(1);
  expect(list.read(1)).toBe('once');

  list.deleteAtIndex(0);
  expect(list.indexOf('red')).toBeNull();
  expect(list.read(0)).toBe('once');
});
