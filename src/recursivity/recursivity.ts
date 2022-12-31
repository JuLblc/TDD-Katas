export const nFactoriel = (n: number) => {
  if (n === 1) return 1;

  return n * nFactoriel(n - 1);
};

export const sumRange = (n: number) => {
  if (n > 1) {
    return n + sumRange(n - 1);
  }
  return n;
};

export const productOfArray = (arr: number[]) => {
  if (arr.length > 1) {
    return arr.pop() * productOfArray(arr);
  }

  return arr[0];
};
