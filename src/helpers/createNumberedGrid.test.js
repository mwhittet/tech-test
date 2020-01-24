import { createNumberedGrid } from "./createNumberedGrid";

describe("helpers > createNumberedGrid", () => {
  it("returns an array of divs with their own numeric value", () => {
    const array = ["1", "2", "3", "4"];
    const result = createNumberedGrid(array);

    expect(Array.isArray(result));
    expect(result).toEqual(expect.arrayContaining(result));
    expect(result).toMatchSnapshot();
  });
});
