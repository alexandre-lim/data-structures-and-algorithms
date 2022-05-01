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
