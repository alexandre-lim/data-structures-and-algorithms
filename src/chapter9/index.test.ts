import { Linter, Stack } from '.';

describe('new stack', () => {
  it('should pop element', () => {
    const stack = new Stack<string>();
    stack.push('A');
    stack.push('B');

    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe('B');
    expect(stack.size()).toBe(1);
  });

  it('should pop undefined if empty stack', () => {
    const stack = new Stack<string>();

    expect(stack.size()).toBe(0);
    expect(stack.pop()).toBeUndefined();
  });

  it('should print last element', () => {
    const stack = new Stack<string>();
    stack.push('A');
    stack.push('B');

    expect(stack.read()).toBe('B');
    expect(stack.size()).toBe(2);
  });
});

describe('linter', () => {
  it('should return true', () => {
    const linter = new Linter();

    expect(linter.lint('( const x = { y: [1, 2, 3 ] } )')).toBe(true);
  });

  it('should return error messages', () => {
    const linter = new Linter();

    expect(linter.lint('const x = { y: [1, 2, 3 ] } )')).toMatchInlineSnapshot(`") doesn't have opening brace"`);
    expect(linter.lint('( const x = { y: [1, 2, 3 ] }')).toMatchInlineSnapshot(`"( doesn't have closing brace"`);
    expect(linter.lint('( const x = { y: [1, 2, 3 ] } ]')).toMatchInlineSnapshot(`"] has mismatched opening brace"`);
  });
});
