import {
  canMoveRight,
  fillSnail,
  initializeSnail,
  Snail,
  Position,
  canMoveDown,
  canMoveLeft,
  canMoveUp,
  computeNextPosition,
  computeAllowedMove,
} from "./snail";

describe("initializeSnail", () => {
  test("should return an array with n element", () => {
    // GIVEN

    // WHEN
    const actual = initializeSnail(1);

    // THEN
    const expected: number[][] = [[]];

    expect(actual).toEqual(expected);
  });

  test("[TRIANGULATION] should return an array with n element", () => {
    // GIVEN

    // WHEN
    const actual = initializeSnail(2);
    // THEN
    const expected: number[][] = [[], []];
    expect(actual).toEqual(expected);
  });

  test("[TRIANGULATION] should return an array with n element", () => {
    // GIVEN

    // WHEN
    const actual = initializeSnail(3);
    // THEN
    const expected: number[][] = [[], [], []];
    expect(actual).toEqual(expected);
  });
});

describe("canMoveRight", () => {
  test("if the next index to the RIGHT(1) is empty and in the array => should return TRUE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2],
      [, ,],
      [, ,],
    ];
    const position: Position = { x: 0, y: 1 };
    // WHEN
    const actual = canMoveRight(snail, position);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the RIGHT(2) is not empty => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [[1, 2], [], []];
    const position: Position = { x: 0, y: 0 };
    // WHEN
    const actual = canMoveRight(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the RIGHT(3) is outside the array => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [[1, 2, 3], [], []];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = canMoveRight(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
});

describe("canMoveDown", () => {
  test("if the next index to the DOWN(1) is empty and in the array => should return TRUE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, ,],
      [, ,],
    ];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = canMoveDown(snail, position);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });

  test("if the next index to the DOWN(2) is not empty => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [, ,],
    ];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = canMoveDown(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the DOWN(3) is outside the array => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [, , 5],
    ];
    const position: Position = { x: 2, y: 2 };
    // WHEN
    const actual = canMoveDown(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
});

describe("canMoveLeft", () => {
  test("if the next index to the LEFT(1) is empty and in the array => should return TRUE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [, , 5],
    ];
    const position: Position = { x: 2, y: 2 };
    // WHEN
    const actual = canMoveLeft(snail, position);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the LEFT(2) is not empty => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [[1, 2, 3], [], []];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = canMoveLeft(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the LEFT(3) is outside the array => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [7, 6, 5],
    ];
    const position: Position = { x: 2, y: 0 };
    // WHEN
    const actual = canMoveLeft(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
});

describe("canMoveUp", () => {
  test("if the next index to the TOP(1) is empty and in the array => should return TRUE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [7, 6, 5],
    ];
    const position: Position = { x: 2, y: 0 };
    // WHEN
    const actual = canMoveUp(snail, position);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the TOP(2) is outside the array => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [[1, 2, 3], [], []];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = canMoveUp(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
  test("if the next index to the TOP(3) is not empty => should return FALSE", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [8, , 4],
      [7, 6, 5],
    ];
    const position: Position = { x: 1, y: 0 };
    // WHEN
    const actual = canMoveUp(snail, position);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });
});

describe("computeNextMove", () => {
  test("if RIGHT & DOWN are allowed => RIGHT should be prioritize", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2],
      [, ,],
      [, ,],
    ];
    const position: Position = { x: 0, y: 1 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 0, y: 2 };
    expect(actual).toEqual(expected);
  });

  test("if UP & LEFT are allowed => LEFT should be prioritize", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [, 6, 5],
    ];
    const position: Position = { x: 2, y: 1 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 2, y: 0 };
    expect(actual).toEqual(expected);
  });

  test("if UP & RIGHT are allowed => UP should be prioritize", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3, 4],
      [, , , 5],
      [11, , , 6],
      [10, 9, 8, 7],
    ];
    const position: Position = { x: 2, y: 0 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 1, y: 0 };
    expect(actual).toEqual(expected);
  });
  test("if DOWN & LEFT are allowed => DOWN should be prioritize", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3, 4],
      [, , , 5],
      [, , ,],
      [, , ,],
    ];
    const position: Position = { x: 1, y: 3 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 2, y: 3 };
    expect(actual).toEqual(expected);
  });

  test("if only RIGHT is allowed => RIGHT", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [8, , 4],
      [7, 6, 5],
    ];
    const position: Position = { x: 1, y: 0 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 1, y: 1 };
    expect(actual).toEqual(expected);
  });

  test("if only DOWN is allowed => DOWN", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, ,],
      [, ,],
    ];
    const position: Position = { x: 0, y: 2 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 1, y: 2 };
    expect(actual).toEqual(expected);
  });

  test("if only LEFT is allowed => LEFT", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [, , 5],
    ];
    const position: Position = { x: 2, y: 2 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 2, y: 1 };
    expect(actual).toEqual(expected);
  });

  test("if only UP is allowed => UP", () => {
    // GIVEN
    const snail: Snail = [
      [1, 2, 3],
      [, , 4],
      [7, 6, 5],
    ];
    const position: Position = { x: 2, y: 0 };
    // WHEN
    const actual = computeNextPosition(computeAllowedMove(snail, position));

    // THEN
    const expected: Position = { x: 1, y: 0 };
    expect(actual).toEqual(expected);
  });
});

describe("fillSnail", () => {
  test("should return a snail array of dimension n=1", () => {
    // GIVEN

    // WHEN
    const actual = fillSnail(1);

    // THEN
    const expected: Snail = [[1]];
    expect(actual).toEqual(expected);
  });

  test("should return a snail array of dimension n=2", () => {
    // GIVEN

    // WHEN
    const actual = fillSnail(2);

    // THEN
    const expected: Snail = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("should return a snail array of dimension n=3", () => {
    // GIVEN

    // WHEN
    const actual = fillSnail(3);

    // THEN
    const expected: Snail = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    expect(actual).toEqual(expected);
  });

  test("should return a snail array of dimension n=4", () => {
    // GIVEN

    // WHEN
    const actual = fillSnail(4);

    // THEN
    const expected: Snail = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    expect(actual).toEqual(expected);
  });
});
