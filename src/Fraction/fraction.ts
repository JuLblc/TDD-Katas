export type Fraction = {
  numerator: number;
  denominator: number;
};

const scale = (fraction: Fraction, multiplicator: number): Fraction => {
  return {
    numerator: fraction.numerator * multiplicator,
    denominator: fraction.denominator * multiplicator,
  };
};

const computeGcd = (a: number, b: number): number => {
  return b === 0 ? a : computeGcd(b, a % b);
};

export const addFraction = (f1: Fraction, f2: Fraction): Fraction => {
  const aSameDenominator: Fraction = scale(f1, f2.denominator);

  const bSameDenominator: Fraction = scale(f2, f1.denominator);

  const beforeReduction = {
    numerator: aSameDenominator.numerator + bSameDenominator.numerator,
    denominator: aSameDenominator.denominator,
  };

  const gcd = computeGcd(beforeReduction.numerator, beforeReduction.denominator);

  return scale(beforeReduction, 1 / gcd);
};
