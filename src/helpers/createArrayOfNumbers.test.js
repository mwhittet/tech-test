import { createArrayOfNumbers } from "./createArrayOfNumbers";

describe("helpers > createArrayOfNumbers", () => {
  it("returns an array of numbers based on the first & last values supplied to it", () => {
    const first = 1;
    const last = 5;
    const result = createArrayOfNumbers(first, last);

    expect(Array.isArray(result));
    expect(result).toEqual(expect.arrayContaining(result));
    expect(result[0]).toBe(first);
    expect(result[result.length - first]).toBe(last);
  });
});
