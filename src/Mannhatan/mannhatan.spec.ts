import { computeMannhatanDistance, Coordinate } from "./mannhatan";

describe("Mannhatan Distance", () => {
  test("compute distance from X to X", () => {
    //GIVEN
    const origin: Coordinate = { x: 0, y: 0 };
    const destination: Coordinate = { x: 0, y: 0 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(0);
  });

  test("compute distance from 0 to X ", () => {
    //GIVEN
    const origin: Coordinate = { x: 0, y: 0 };
    const destination: Coordinate = { x: 1, y: 0 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(1);
  });

  test("compute distance from depX to arrX ", () => {
    //GIVEN
    const origin: Coordinate = { x: 1, y: 0 };
    const destination: Coordinate = { x: 2, y: 0 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(1);
  });

  test("compute distance from arrX to depX ", () => {
    //GIVEN
    const origin: Coordinate = { x: 2, y: 0 };
    const destination: Coordinate = { x: 1, y: 0 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(1);
  });

  test("compute distance from arr(X,Y) to dep(X,Y) ", () => {
    //GIVEN
    const origin: Coordinate = { x: 0, y: 2 };
    const destination: Coordinate = { x: 0, y: 1 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(1);
  });

  test("compute distance from arr(X,Y) to dep(X,Y) ", () => {
    //GIVEN
    const origin: Coordinate = { x: 1, y: 2 };
    const destination: Coordinate = { x: 2, y: 1 };
    //WHEN
    const actual = computeMannhatanDistance(origin, destination);
    //THEN
    expect(actual).toEqual(2);
  });
});
