export type AutorizedChar = " " | "*";
export type Row = AutorizedChar[];
export type Diamond = Row[];

const fillArr = (charQty: number, char: AutorizedChar): Row => {
  return new Array(charQty).fill(char);
};

const createRow = (dimension: number, index: number): Row => {
  const starsQty = index * 2 + 1;
  const spaceQty = (dimension - starsQty) / 2;

  return [...fillArr(spaceQty, " "), ...fillArr(starsQty, "*"), ...fillArr(spaceQty, " ")];
};

const buildHalfDiamont = (dimension: number): Diamond => {
  let diamond = [];
  for (let i = 0; i <= (dimension - 1) / 2; i++) {
    diamond.push(createRow(dimension, i));
  }

  for (let j = (dimension - 1) / 2 - 1; j >= 0; j--) {
    diamond.push(createRow(dimension, j));
  }
  return diamond;
};

export { createRow, buildHalfDiamont };
