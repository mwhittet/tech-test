import { numbers } from "./createArrayOfNumbers";
import { createNumberedBox } from "./createNumberedBox";

export const createNumberedGrid = array => array.map(createNumberedBox);

export const grid = createNumberedGrid(numbers);
