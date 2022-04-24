export function reverse(word: string): string {
  if (word.length === 0) throw new Error('Empty string not authorized');
  if (word.length === 1) return word[0];
  return reverse(word.substring(1)) + word[0];
}

export function numberOfPath(steps: number): number {
  if (steps < 0) return 0;
  if (steps === 0 || steps === 1) return 1;
  return numberOfPath(steps - 1) + numberOfPath(steps - 2) + numberOfPath(steps - 3);
}

export function anagramOf(word: string): Array<string> | string {
  if (word.length === 1) return word[0];

  const collection: string[] = [];

  const substringAnagrams = anagramOf(word.substring(1));

  for (const substringAnagram of substringAnagrams) {
    // Note the importance of the equality <= to add the character at the end
    for (let index = 0; index <= substringAnagram.length; index += 1) {
      collection.push(substringAnagram.substring(0, index) + word[0] + substringAnagram.substring(index));
    }
  }

  return collection;
}
