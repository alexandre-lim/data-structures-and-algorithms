import { Queue } from '../chapter14';

export class Vertex {
  private _value: string;
  private _adjacentVertices: Array<Vertex>;

  constructor(value: string) {
    this._value = value;
    this._adjacentVertices = [];
  }

  public get value() {
    return this._value;
  }

  public get adjacentVertices(): ReadonlyArray<Vertex> {
    return this._adjacentVertices;
  }

  public addAdjacentVertex(vertex: Vertex) {
    if (this._adjacentVertices.includes(vertex)) return;
    this._adjacentVertices.push(vertex);
    vertex.addAdjacentVertex(this);
  }

  public depthFirstSearchTraverse(
    vertex: Vertex,
    visitedVertices: { [key: string]: boolean } = {},
    result: Array<string> = []
  ) {
    visitedVertices[vertex.value] = true;
    result.push(vertex.value);

    for (const adjacentVertex of vertex._adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        this.depthFirstSearchTraverse(adjacentVertex, visitedVertices, result);
      }
    }

    return result;
  }

  public depthFirstSearch(
    vertex: Vertex,
    searchValue: string,
    visitedVertices: { [key: string]: boolean } = {}
  ): Vertex | null {
    if (vertex.value === searchValue) return vertex;

    visitedVertices[vertex.value] = true;

    for (const adjacentVertex of vertex._adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        if (adjacentVertex.value === searchValue) return adjacentVertex;

        const vertexWeSearchFor = this.depthFirstSearch(adjacentVertex, searchValue, visitedVertices);

        if (vertexWeSearchFor) return vertexWeSearchFor;
      }
    }

    return null;
  }

  public breadthFirstSearchTraverse(startingVertex: Vertex) {
    const queue = new Queue<Vertex>();
    const result: Array<string> = [];

    const visitedVertices: { [key: string]: boolean } = {};
    visitedVertices[startingVertex.value] = true;
    queue.enqueue(startingVertex);

    while (queue.read()) {
      const currentVertex = queue.dequeue();
      if (currentVertex === null) break;

      result.push(currentVertex.value);

      for (const adjacentVertex of currentVertex._adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          visitedVertices[adjacentVertex.value] = true;
          queue.enqueue(adjacentVertex);
        }
      }
    }

    return result;
  }
}

export class WeightedGraphVertex {
  private _value: string;
  private _adjacentVertices;

  constructor(value: string) {
    this._value = value;
    this._adjacentVertices = new Map<WeightedGraphVertex, number>();
  }

  public get value() {
    return this._value;
  }

  public get routes() {
    return this._adjacentVertices;
  }

  public addAdjacentVertex(vertex: WeightedGraphVertex, weight: number) {
    this._adjacentVertices.set(vertex, weight);
  }
}

export class City {
  private _name: string;
  private _routes;

  constructor(name: string) {
    this._name = name;
    this._routes = new Map<City, number>();
  }

  public get name() {
    return this._name;
  }

  public get routes() {
    return this._routes;
  }

  public addRoute(city: City, price: number) {
    this._routes.set(city, price);
  }
}

export function dijkstraShortestPath(startingCity: City, finalDestination: City) {
  const cheapestPriceTable: Record<string, number> = {};
  const cheapestPreviousStopoverCityTable: Record<string, string> = {};

  const unvisitedCities: Array<City> = []; // Better to use a priority Queue
  const visitedCities: Record<string, boolean> = {};

  cheapestPriceTable[startingCity.name] = 0;

  let currentCity = startingCity;

  while (currentCity) {
    visitedCities[currentCity.name] = true;
    removeItem(unvisitedCities, currentCity);

    for (const [adjacentCity, price] of currentCity.routes) {
      if (!visitedCities[adjacentCity.name] && !unvisitedCities.includes(adjacentCity)) {
        unvisitedCities.push(adjacentCity);
      }

      const priceThroughCurrentCity = cheapestPriceTable[currentCity.name] + price;

      if (!cheapestPriceTable[adjacentCity.name] || priceThroughCurrentCity < cheapestPriceTable[adjacentCity.name]) {
        cheapestPriceTable[adjacentCity.name] = priceThroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity.name;
      }
    }

    if (unvisitedCities.length === 0) break;

    // Using a Greedy Algorithm
    currentCity = unvisitedCities[0];
    let currentCityPrice = cheapestPriceTable[unvisitedCities[0].name];

    for (let i = 1; i < unvisitedCities.length; i += 1) {
      if (cheapestPriceTable[unvisitedCities[i].name] < currentCityPrice) {
        currentCity = unvisitedCities[i];
        currentCityPrice = cheapestPriceTable[unvisitedCities[i].name];
      }
    }
  }

  const shortestPath = [];
  let currentCityName = finalDestination.name;

  while (currentCityName !== startingCity.name) {
    shortestPath.push(currentCityName);
    currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
  }

  shortestPath.push(startingCity.name);

  return [cheapestPriceTable, cheapestPreviousStopoverCityTable, shortestPath.reverse()];
}

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
