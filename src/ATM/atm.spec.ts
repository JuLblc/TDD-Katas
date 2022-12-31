import { atm } from "./atm";

const arrayNotes: number[] = [500, 200, 100, 50, 20, 10];

describe("recursivAtm", () => {
  test("user can withdraw single note of 10", () => {
    //GIVEN
    //WHEN

    //THEN
    const expected = {
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 0,
      10: 1,
    };
    expect(atm(10)).toEqual(expected);
  });

  test("user can withdraw single note of any amount", () => {
    //GIVEN
    //WHEN

    //THEN
    const expected = {
      500: 0,
      200: 0,
      100: 0,
      50: 1,
      20: 0,
      10: 0,
    };
    expect(atm(50)).toEqual(expected);
  });

  test("user can withdraw multiples notes of one amount", () => {
    //GIVEN
    //WHEN

    //THEN
    const expected = {
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 2,
      10: 0,
    };
    expect(atm(40)).toEqual(expected);
  });

  test("user can withdraw notes of two differents amount", () => {
    //GIVEN
    //WHEN

    //THEN
    const expected = {
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 1,
      10: 1,
    };
    expect(atm(30)).toEqual(expected);
  });
});
