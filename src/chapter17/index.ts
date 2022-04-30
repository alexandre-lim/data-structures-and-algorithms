class TrieNode {
  private _children: { [key: string]: TrieNode | null };

  constructor() {
    this._children = {};
  }

  public get children() {
    return this._children;
  }
}

export class Trie {
  private _root: TrieNode;

  constructor() {
    this._root = new TrieNode();
  }

  public search(word: string) {
    let currentNode = this._root;

    for (const char of word) {
      const childNode = currentNode.children[char];
      if (childNode) {
        currentNode = childNode;
      } else {
        return null;
      }
    }

    return currentNode;
  }

  public insert(word: string) {
    let currentNode = this._root;

    for (const char of word) {
      const childeNode = currentNode.children[char];
      if (childeNode) {
        currentNode = childeNode;
      } else {
        const newNode = new TrieNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }

    currentNode.children['*'] = null;
  }

  public collectAllWords(node: TrieNode | null = null, word = '', words: Array<string> = []) {
    const currentNode = node || this._root;

    for (const [key, childNode] of Object.entries(currentNode.children)) {
      if (key === '*') {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }

    return words;
  }

  public autocomplete(prefix: string) {
    const currentNode = this.search(prefix);
    if (!currentNode) return null;
    return this.collectAllWords(currentNode);
  }
}
