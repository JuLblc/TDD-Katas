export type Notes = {
  500: number;
  200: number;
  100: number;
  50: number;
  20: number;
  10: number;
};
const emptyNote: Notes = { 500: 0, 200: 0, 100: 0, 50: 0, 20: 0, 10: 0 };
const allArrayNotes: number[] = [500, 200, 100, 50, 20, 10];

const computeEuclidienneDivision = (dividend: number, divisor: number) => {
  return { quotient: Math.floor(dividend / divisor), rest: dividend % divisor };
};
export const atm = (amount: number) => {
  return recursivAtm(amount, allArrayNotes);
};

export const recursivAtm = (amount: number, arrayNotes: number[]) => {
  const [maxNote, ...restNotes] = arrayNotes;

  if (amount === 0) {
    return emptyNote;
  }

  const { quotient, rest: nextAmountToServe } = computeEuclidienneDivision(amount, maxNote);

  return {
    ...recursivAtm(nextAmountToServe, restNotes),
    [maxNote]: quotient,
  };
};
