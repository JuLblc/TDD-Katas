import { createRow, Row, Diamond, buildHalfDiamont } from "./diamond";

describe("createRow", () => {
  test("middle line", () => {
    // GIVEN
    const dimension = 5;
    // WHEN
    const actual = createRow(dimension, 2);

    // THEN
    const expected: Row = ["*", "*", "*", "*", "*"];
    expect(actual).toEqual(expected);
  });

  test("middle line", () => {
    // GIVEN
    const dimension = 3;
    // WHEN
    const actual = createRow(dimension, 1);

    // THEN
    const expected: Row = ["*", "*", "*"];
    expect(actual).toEqual(expected);
  });

  test("line with one empty char", () => {
    // GIVEN
    const dimension = 5;
    // WHEN
    const actual = createRow(dimension, 1);

    // THEN
    const expected: Row = [" ", "*", "*", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("line with one empty char", () => {
    // GIVEN
    const dimension = 3;
    // WHEN
    const actual = createRow(dimension, 0);

    // THEN
    const expected: Row = [" ", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("line with more than one empty char", () => {
    // GIVEN
    const dimension = 5;
    // WHEN
    const actual = createRow(dimension, 0);

    // THEN
    const expected: Row = [" ", " ", "*", " ", " "];
    expect(actual).toEqual(expected);
  });
});

describe("createDiamond", () => {
  test("build one dimension diamond", () => {
    // GIVEN
    const dimension = 1;
    // WHEN
    const actual = buildHalfDiamont(dimension);

    // THEN
    const expected: Diamond = [["*"]];
    expect(actual).toEqual(expected);
  });

  test.skip("build half three dimension diamond", () => {
    // GIVEN
    const dimension = 3;
    // WHEN
    const actual = buildHalfDiamont(dimension);

    // THEN
    const expected: Diamond = [
      [" ", "*", " "],
      ["*", "*", "*"],
    ];
    expect(actual).toEqual(expected);
  });

  test("build full three dimension diamond", () => {
    // GIVEN
    const dimension = 3;
    // WHEN
    const actual = buildHalfDiamont(dimension);

    // THEN
    const expected: Diamond = [
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ];
    expect(actual).toEqual(expected);
  });
});
