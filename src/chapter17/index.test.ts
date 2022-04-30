import { Trie } from '.';

describe('Trie class', () => {
  it('should be able to insert new words and search for them', () => {
    const trie = new Trie();
    const cat = 'cat';
    const can = 'can';

    expect(trie.search(cat)).toBeNull();
    expect(trie.search(can)).toBeNull();

    trie.insert(cat);
    trie.insert(can);

    expect(trie.search(cat)).not.toBeNull();
    expect(trie.search(can)).not.toBeNull();

    expect(trie.search(cat)?.children).toEqual({ '*': null });
    expect(trie.search(can)?.children).toEqual({ '*': null });
  });

  it('should return all words in the Trie', () => {
    const trie = new Trie();

    const ace = 'ace';
    const bat = 'bat';
    const batter = 'batter';
    const battle = 'battle';
    const cat = 'cat';
    const can = 'can';

    trie.insert(ace);
    trie.insert(bat);
    trie.insert(batter);
    trie.insert(battle);
    trie.insert(cat);
    trie.insert(can);

    expect(trie.collectAllWords()).toMatchInlineSnapshot(`
      Array [
        "ace",
        "bat",
        "batter",
        "battle",
        "cat",
        "can",
      ]
    `);
  });

  it('should return possible autocomplete of a prefix', () => {
    const trie = new Trie();

    const ace = 'ace';
    const bat = 'bat';
    const batter = 'batter';
    const battle = 'battle';
    const cat = 'cat';
    const can = 'can';

    trie.insert(ace);
    trie.insert(bat);
    trie.insert(batter);
    trie.insert(battle);
    trie.insert(cat);
    trie.insert(can);

    expect(trie.autocomplete('b')).toMatchInlineSnapshot(`
      Array [
        "at",
        "atter",
        "attle",
      ]
    `);
  });
});
