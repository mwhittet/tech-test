import { grid } from "./helpers/createNumberedGrid";

let activeNumber;

const addBoxClass = box => {
  activeNumber && !(box.innerText % activeNumber)
    ? box.classList.add("active")
    : box.classList.remove("active");
};

const setAllMatchingBoxes = array => array.forEach(addBoxClass);

export const handleClick = number => {
  activeNumber = number !== activeNumber && number;
  setAllMatchingBoxes(grid);
};
