const buttons = document.querySelectorAll("button");
const upperScreen: HTMLElement | null | any =
  document.querySelector(".upper-screen");
const lowerScreen: HTMLElement | null | any =
  document.querySelector(".lower-screen");
let answer: HTMLElement | null | any = document.getElementById("answer");
let result: Number | Error;

// function for evaluation
const evaluate = () => {
  try {
    result = eval(upperScreen.innerHTML);
    lowerScreen.innerHTML = result;
    upperScreen.innerHTML = "";
  } catch (error) {
    lowerScreen.innerHTML = "Error";
  }
};

//function for displayiong content at lower screen when typing
const typingDisplay = () => {
  result = eval(upperScreen.innerHTML);
  lowerScreen.innerHTML = result;
};

//handle clicke function for all buttons
const handleClick = (button: HTMLButtonElement) => {
  if (button.innerText === "0") {
    if (upperScreen.innerHTML == "0" || upperScreen.innerHTML == "") {
      upperScreen.innerHTML = button.innerText;
    } else {
      upperScreen.innerHTML += button.innerText;
    }
  } else if (button.innerText === "00") {
    if (upperScreen.innerHTML == "" || upperScreen.innerHTML == "0") {
      upperScreen.innerHTML = "0";
    } else {
      upperScreen.innerHTML += button.innerText;
    }
  } else if (!isNaN(parseFloat(button.innerText))) {
    upperScreen.innerHTML += button.innerText;
    typingDisplay();
  } else if (button.innerText == "C") {
    upperScreen.innerHTML = "";
    lowerScreen.innerHTML = "";
  } else if (button.innerText == "backspace") {
    upperScreen.innerHTML = upperScreen.innerHTML.slice(0, -1);
    if (upperScreen.innerHTML != "") {
      typingDisplay();
    } else {
      lowerScreen.innerText = "";
    }
  } else if (
    button.innerText == "/" ||
    button.innerText == "*" ||
    button.innerText == "-" ||
    button.innerText == "+"
  ) {
    upperScreen.innerHTML += " " + button.innerHTML + " ";
    typingDisplay();
  } else if (button.innerText === ".") {
    let screenContent = upperScreen.innerHTML;
    let lastNum = screenContent.split(/[+\-*/]/).pop();
    if (!lastNum.includes(".")) {
      upperScreen.innerHTML += button.innerHTML;
    }
  } else if (button.innerText === "%") {
    upperScreen.innerHTML += button.innerText;
  } else if (button.innerText == "=") {
    evaluate();
  }
};

//adding event listener for the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => handleClick(button));
});
