import { handleClick } from "../numberSelection";

export const createNumberedBox = number => {
  let box = document.createElement("div");
  let text = document.createTextNode(number);

  box.setAttribute("class", "box");
  box.onclick = () => handleClick(number);
  box.appendChild(text);

  return box;
};
