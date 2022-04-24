export function fib(n: number, memo: { [key: number]: number } = {}): number {
  if (n === 0 || n === 1) return n;

  if (!memo[n]) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }

  return memo[n];
}

export function fibIteration(n: number) {
  if (n === 0) return 0;

  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i += 1) {
    const temp = a;
    a = b;
    b = temp + a;
  }
  return b;
}
