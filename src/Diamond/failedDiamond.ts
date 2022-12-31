const createRow = (n: number) => {
  return [...new Array(n)].map((column, idx) => {
    if (idx === 0 || idx === 2) {
      return " ";
    }
    return "*";
  });
};

export const diamond = (n: number) => {
  if (n === 1) {
    return [["*"]];
  }

  const arr = [...new Array(n)].map((row, idx) => {
    if (idx === 0 || idx === 2) {
      return createRow(n);
    }

    return ["*", "*", "*"];
  });

  console.log(arr);
  return [
    [" ", "*", " "],
    ["*", "*", "*"],
    [" ", "*", " "],
  ];
};
