const buttons = document.querySelector(".buttons");
const inputField = document.querySelector(".screen");

buttons.addEventListener("click", (event) => {
  event.preventDefault();
  const currentElement = event.target;

  const currentNumber = currentElement.getAttribute("data-num");

  if (currentNumber) {
    // inputField.value = inputField.value + currentNumber;
    inputField.value += currentNumber;
  }

  if (currentElement.className === "btn-clear btn-grey") {
    // clear ka button ha
    inputField.value = "";
  }

  if (currentElement.className === "btn-equal btn-grey") {
    inputField.value = eval(inputField.value);
  }

  if (currentElement.className === "btn-remove btn-grey") {
    inputField.value = inputField.value.slice(0, -1);
  }
});