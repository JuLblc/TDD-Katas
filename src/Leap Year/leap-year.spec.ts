import { isLeapYear } from "./leap-year";

describe("is a leap year", () => {
  test("2023", () => {
    // GIVEN

    // WHEN
    const actual = isLeapYear(2023);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });

  test("if is divisible by 4 => is leap year => return true", () => {
    // GIVEN

    // WHEN
    const actual = isLeapYear(2020);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });

  test("if is divisible by 100 => isn't leap year => return false", () => {
    // GIVEN

    // WHEN
    const actual = isLeapYear(2100);

    // THEN
    const expected: boolean = false;
    expect(actual).toEqual(expected);
  });

  test("if is divisible by 400 => is leap year => return true", () => {
    // GIVEN

    // WHEN
    const actual = isLeapYear(2000);

    // THEN
    const expected: boolean = true;
    expect(actual).toEqual(expected);
  });
});
