import { fib, fibIteration } from '.';

test('fib', () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(6)).toBe(8);
  expect(fib(10)).toBe(55);
});

test('fibIteration', () => {
  expect(fibIteration(0)).toBe(0);
  expect(fibIteration(1)).toBe(1);
  expect(fibIteration(6)).toBe(8);
  expect(fibIteration(10)).toBe(55);
});
