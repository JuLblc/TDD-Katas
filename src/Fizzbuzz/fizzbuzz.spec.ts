import { fizzbuzz, replaceNumber } from "./fizzbuzz";

describe("function fizzbuzz", () => {
  test("should return the number", () => {
    // GIVEN    
    // WHEN
    const actual = replaceNumber(1);
    
    // THEN
    const expected: string = "1";
    expect(actual).toEqual(expected);
  });

  test("if the number is multiple of 3, should return 'Fizz'", () => {
    // GIVEN    
    // WHEN
    const actual = replaceNumber(6);
    
    // THEN
    const expected: string = "Fizz";
    expect(actual).toEqual(expected);
  });

  test("if the number is multiple of 5, should return 'Buzz'", () => {
    // GIVEN    
    // WHEN
    const actual = replaceNumber(2*5);
    
    // THEN
    const expected: string = "Buzz";
    expect(actual).toEqual(expected);
  });

  test("if the number is multiple of 3 and 5, should return 'FizzBuzz'", () => {
    // GIVEN    
    // WHEN
    const actual = replaceNumber(3*5);
    
    // THEN
    const expected: string = "FizzBuzz";
    expect(actual).toEqual(expected);
  });

  test("should replaceNumber for allnumber of the range", () => {
    // GIVEN    
    // WHEN
    const actual = fizzbuzz(1);
    
    // THEN
    const expected: string[] = ['1'];
    expect(actual).toEqual(expected);
  });

  test("[TRIANGULATION] should replaceNumber for allnumber of the range", () => {
    // GIVEN    
    // WHEN
    const actual = fizzbuzz(2);
    
    // THEN
    const expected: string[] = ['1', '2'];
    expect(actual).toEqual(expected);
  });

  test("[TRIANGULATION] should replaceNumber for allnumber of the range", () => {
    // GIVEN    
    // WHEN
    const actual = fizzbuzz(3);
    
    // THEN
    const expected: string[] = ['1', '2', 'Fizz'];
    expect(actual).toEqual(expected);
  });
});