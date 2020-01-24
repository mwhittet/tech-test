import { createNumberedBox } from "./createNumberedBox";

jest.mock("../numberSelection", () => ({
  handleClick: jest.fn()
}));

describe("helpers > createNumberedBox", () => {
  it("returns a div with a numeric value", () => {
    const number = 99;
    const result = createNumberedBox(number);

    expect(result).toMatchSnapshot();
    expect(result.innerHTML).toBe(`${number}`);
  });
});
