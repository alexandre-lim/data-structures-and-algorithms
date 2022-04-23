export function isPalindrome(word: string) {
  let leftIndex = 0;
  let rightIndex = word.length - 1;

  while (leftIndex < word.length / 2) {
    if (word[leftIndex] !== word[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }

  return true;
}
