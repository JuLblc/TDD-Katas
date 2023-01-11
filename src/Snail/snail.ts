export type Snail = number[][];
export type Position = {
  x: number;
  y: number;
};
export type Move = {
  right: boolean;
  down: boolean;
  left: boolean;
  up: boolean;
};

export const initializeSnail = (n: number): Snail => {
  return Array.from({ length: n }, () => []);
};

export const canMoveRight = (snail: Snail, { x, y }: Position): boolean => {
  return !(y === snail.length - 1 || snail[x][y + 1]);
};

export const canMoveDown = (snail: Snail, { x, y }: Position): boolean => {
  return !(x === snail.length - 1 || snail[x + 1][y]);
};

export const canMoveLeft = (snail: Snail, { x, y }: Position): boolean => {
  return !(y === 0 || snail[x][y - 1]);
};

export const canMoveUp = (snail: Snail, { x, y }: Position): boolean => {
  return !(x === 0 || snail[x - 1][y]);
};

export const computeAllowedMove = (snail: Snail, position: Position): { move: Move; position: Position } => {
  return {
    move: {
      right: canMoveRight(snail, position),
      down: canMoveDown(snail, position),
      left: canMoveLeft(snail, position),
      up: canMoveUp(snail, position),
    },
    position,
  };
};

export const computeNextPosition = ({ move, position }: { move: Move; position: Position }): Position => {
  const { right, left, up, down } = move;
  const { x, y } = position;

  const isOnlyRight = right && !down && !left && !up;
  const isOnlyLeft = !right && !down && left && !up;
  const isOnlyUp = !right && !down && !left && up;
  const isOnlyDown = !right && down && !left && !up;
  const shouldPrioritizeRight = right && down && !left && !up;
  const shouldPrioritizeLeft = !right && !down && left && up;
  const shouldPrioritizeUp = right && !down && !left && up;
  const shouldPrioritizeDown = !right && down && left && !up;

  if (shouldPrioritizeRight || isOnlyRight) return { x, y: y + 1 };
  if (shouldPrioritizeLeft || isOnlyLeft) return { x, y: y - 1 };
  if (shouldPrioritizeUp || isOnlyUp) return { x: x - 1, y };
  if (shouldPrioritizeDown || isOnlyDown) return { x: x + 1, y };
};

export const fillSnail = (n: number): Snail => {
  const snail = initializeSnail(n);
  let position = { x: 0, y: 0 };

  for (let i = 1; i <= n * n; i++) {
    snail[position.x][position.y] = i;
    position = computeNextPosition(computeAllowedMove(snail, position));
  }

  return snail;
};
