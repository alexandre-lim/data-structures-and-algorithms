import { sum } from './sum';

describe('sum', () => {
  it('should return 8', () => {
    const result = sum(4, 4);
    expect(result).toBe(8);
  });
});
