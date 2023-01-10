import { addFraction, Fraction } from "./fraction";

describe("Summ of 2 fractions", () => {
  test("summ of 2 fractions with same denominator", () => {
    // GIVEN

    // WHEN
    const actual = addFraction({ numerator: 1, denominator: 1 }, { numerator: 1, denominator: 1 });

    // THEN
    const expected: Fraction = { numerator: 2, denominator: 1 };
    expect(actual).toEqual(expected);
  });

  test("summ of 2 fractions with different denominator", () => {
    // GIVEN

    // WHEN
    const actual = addFraction({ numerator: 1, denominator: 1 }, { numerator: 1, denominator: 2 });

    // THEN
    const expected: Fraction = { numerator: 3, denominator: 2 };
    expect(actual).toEqual(expected);
  });

  test("summ of 2 fractions with different denominator", () => {
    // GIVEN

    // WHEN
    const actual = addFraction({ numerator: 1, denominator: 2 }, { numerator: 1, denominator: 3 });

    // THEN
    const expected: Fraction = { numerator: 5, denominator: 6 };
    expect(actual).toEqual(expected);
  });

  test("summ of 2 fractions (reduction)", () => {
    // GIVEN

    // WHEN
    const actual = addFraction({ numerator: 1, denominator: 4 }, { numerator: 1, denominator: 4 });

    // THEN
    const expected: Fraction = { numerator: 1, denominator: 2 };
    expect(actual).toEqual(expected);
  });
});
