export function factorial(numb: number): number {
  if (numb < 0) throw new Error('Number should be positive');
  if (numb === 0 || numb === 1) return 1;
  return numb * factorial(numb - 1);
}
