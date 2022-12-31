import { diamond } from "./failedDiamond";

describe.skip("BuildDiamond", () => {
  test("if n=1, shoud return '*'", () => {
    const result = diamond(1);
    expect(result).toEqual([["*"]]);
  });

  test("if n=3, shoud return '*'", () => {
    const result = diamond(3);
    expect(result).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });

  test("if n=5, shoud return '*'", () => {
    const result = diamond(5);
    expect(result).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
});
