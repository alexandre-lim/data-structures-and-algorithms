import { isPalindrome } from '.';

describe('isPalindrome', () => {
  it.each(['racecar', 'kayak'])('%s should be a palindrome and return true', (word) => {
    expect(isPalindrome(word)).toBe(true);
  });

  it('cake should not be a palindrome and return false', () => {
    const cake = 'cake';
    expect(isPalindrome(cake)).toBe(false);
  });
});
