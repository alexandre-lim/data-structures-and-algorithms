import { sum } from '../sum';

describe('sum', () => {
  it('should return 5', () => {
    const result = sum(3, 2);
    expect(result).toBe(5);
  });
});
