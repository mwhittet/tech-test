export const createArrayOfNumbers = (first, last) => {
  return Array(last - first + 1)
    .fill()
    .map((n, i) => i + first);
};

export const numbers = createArrayOfNumbers(1, 144);
