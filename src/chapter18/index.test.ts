import { Vertex } from '.';

describe('Graph using Vertex class', () => {
  const alice = new Vertex('Alice');
  const bob = new Vertex('Bob');
  const candy = new Vertex('Candy');
  const derek = new Vertex('Derek');
  const elaine = new Vertex('Elaine');
  const fred = new Vertex('Fred');
  const gina = new Vertex('Gina');
  const helen = new Vertex('Helen');
  const irena = new Vertex('Irena');

  alice.addAdjacentVertex(bob);
  alice.addAdjacentVertex(candy);
  alice.addAdjacentVertex(derek);
  alice.addAdjacentVertex(elaine);

  bob.addAdjacentVertex(fred);

  fred.addAdjacentVertex(helen);
  candy.addAdjacentVertex(helen);

  derek.addAdjacentVertex(elaine);
  derek.addAdjacentVertex(gina);

  gina.addAdjacentVertex(irena);

  it('should traverse the graph using depth-first search', () => {
    expect(alice.depthFirstSearchTraverse(alice)).toMatchInlineSnapshot(`
      Array [
        "Alice",
        "Bob",
        "Fred",
        "Helen",
        "Candy",
        "Derek",
        "Elaine",
        "Gina",
        "Irena",
      ]
    `);

    expect(irena.depthFirstSearchTraverse(irena)).toMatchInlineSnapshot(`
      Array [
        "Irena",
        "Gina",
        "Derek",
        "Alice",
        "Bob",
        "Fred",
        "Helen",
        "Candy",
        "Elaine",
      ]
    `);
  });

  it('should search for a Vertex in the graph using depth-first search and return the Vertex or null', () => {
    expect(alice.depthFirstSearch(alice, 'Alex')).toBeNull();
    expect(alice.depthFirstSearch(alice, 'Helen')?.value).toBe('Helen');
  });

  it('should traverse the graph using breadth-first search', () => {
    expect(alice.breadthFirstSearchTraverse(alice)).toMatchInlineSnapshot(`
      Array [
        "Alice",
        "Bob",
        "Candy",
        "Derek",
        "Elaine",
        "Fred",
        "Helen",
        "Gina",
        "Irena",
      ]
    `);
  });
});
