export type Coordinate = {
  x: number;
  y: number;
};

const computeOneDimensionDistance = (x: number, y: number): number => {
  return Math.abs(x - y);
};

const computeMannhatanDistance = (origin: Coordinate, destination: Coordinate): number => {
  return computeOneDimensionDistance(origin.x, destination.x) + computeOneDimensionDistance(origin.y, destination.y);
};

export { computeMannhatanDistance };
