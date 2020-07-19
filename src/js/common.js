let add = (x1, y1) => x1 + y1;
console.log(add(1, 2));

export function sumMy(x, y) {
  const one = x;
  return function (y) {
    return one + y;
  };
}
