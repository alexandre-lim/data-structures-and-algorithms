import { Vertex, City, WeightedGraphVertex, dijkstraShortestPath } from '.';

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

test('WeightedGraph', () => {
  const dallas = new WeightedGraphVertex('Dallas');
  const toronto = new WeightedGraphVertex('Toronto');

  dallas.addAdjacentVertex(toronto, 138);
  toronto.addAdjacentVertex(dallas, 216);

  for (const [vertex, weight] of dallas.routes) {
    expect(vertex.value).toBe('Toronto');
    expect(weight).toBe(138);
  }
});

test('Dijkstra shortest path', () => {
  const atlanta = new City('Atlanta');
  const boston = new City('Boston');
  const chicago = new City('Chicago');
  const denver = new City('Denver');
  const elPaso = new City('El Paso');

  atlanta.addRoute(boston, 100);
  atlanta.addRoute(denver, 160);

  boston.addRoute(chicago, 120);
  boston.addRoute(denver, 180);

  chicago.addRoute(elPaso, 80);

  denver.addRoute(chicago, 40);
  denver.addRoute(elPaso, 140);

  // Shortest path with cheapest price from Atlanta to El Paso
  const [cheapestPriceTable, cheapestPreviousStopoverCityTable, shortestPath] = dijkstraShortestPath(atlanta, elPaso);

  expect(cheapestPriceTable).toMatchInlineSnapshot(`
    Object {
      "Atlanta": 0,
      "Boston": 100,
      "Chicago": 200,
      "Denver": 160,
      "El Paso": 280,
    }
  `);

  expect(cheapestPreviousStopoverCityTable).toMatchInlineSnapshot(`
    Object {
      "Boston": "Atlanta",
      "Chicago": "Denver",
      "Denver": "Atlanta",
      "El Paso": "Chicago",
    }
  `);

  expect(shortestPath).toMatchInlineSnapshot(`
    Array [
      "Atlanta",
      "Denver",
      "Chicago",
      "El Paso",
    ]
  `);
});
