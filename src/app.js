import { grid } from "./helpers/createNumberedGrid";

// source goes here
const app = () => {
  const referenceNode = document.querySelector("h1");
  const numberGrid = document.createElement("div");

  numberGrid.setAttribute("id", "grid");
  numberGrid.append(...grid);
  referenceNode.after(numberGrid);
};

export default app;
