import { nFactoriel, productOfArray, sumRange } from "./recursivity";

describe("nFactoriel", () => {
  test("if n=1, should return 1", () => {
    const expected = 1;
    expect(nFactoriel(1)).toEqual(expected);
  });

  test("if n=2, should return 2", () => {
    const expected = 2;
    expect(nFactoriel(2)).toEqual(expected);
  });

  test("if n=3, should return 6", () => {
    const expected = 6;
    expect(nFactoriel(3)).toEqual(expected);
  });

  test("if n=4, should return 24", () => {
    const expected = 24;
    expect(nFactoriel(4)).toEqual(expected);
  });

  test("if n=12, should return 479001600", () => {
    const expected = 479001600;
    expect(nFactoriel(12)).toEqual(expected);
  });
});

describe("sumRange", () => {
  test("if n=1, should return 1", () => {
    const expected = 1;
    expect(sumRange(1)).toEqual(expected);
  });
  test("if n=2, should return 3", () => {
    const expected = 3;
    expect(sumRange(2)).toEqual(expected);
  });

  test("if n=3, should return 6", () => {
    const expected = 6;
    expect(sumRange(3)).toEqual(expected);
  });

  test("if n=4, should return 10", () => {
    const expected = 10;
    expect(sumRange(4)).toEqual(expected);
  });

  test("if n=9, should return 45", () => {
    const expected = 45;
    expect(sumRange(9)).toEqual(expected);
  });
});

describe("productOfArray", () => {
  test("if arr=[1], should return 1", () => {
    const expected = 1;
    expect(productOfArray([1])).toEqual(expected);
  });
  test("if arr=[1,1], should return 1", () => {
    const expected = 1;
    expect(productOfArray([1, 1])).toEqual(expected);
  });
  test("if arr=[1,2], should return 2", () => {
    const expected = 2;
    expect(productOfArray([1, 2])).toEqual(expected);
  });
  test("if arr=[1,2,3], should return 6", () => {
    const expected = 6;
    expect(productOfArray([1, 2, 3])).toEqual(expected);
  });
  test("if arr=[1,2,3,10], should return 60", () => {
    const expected = 60;
    expect(productOfArray([1, 2, 3, 10])).toEqual(expected);
  });
});
