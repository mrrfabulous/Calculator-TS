"use strict";
const buttons = document.querySelectorAll("button");
const upperScreen = document.querySelector(".upper-screen");
const lowerScreen = document.querySelector(".lower-screen");
let answer = document.getElementById("answer");
let result;
const evaluate = () => {
    try {
        result = eval(upperScreen.innerHTML);
        lowerScreen.innerHTML = result;
        upperScreen.innerHTML = "";
    }
    catch (error) {
        lowerScreen.innerHTML = "Error";
    }
};
const typingDisplay = () => {
    result = eval(upperScreen.innerHTML);
    lowerScreen.innerHTML = result;
};
const handleClick = (button) => {
    if (!isNaN(parseFloat(button.innerText))) {
        upperScreen.innerHTML += button.innerText;
        typingDisplay();
    }
    else if (button.innerText == "C") {
        upperScreen.innerHTML = "";
        lowerScreen.innerHTML = "";
    }
    else if (button.innerText == "backspace") {
        upperScreen.innerHTML = upperScreen.innerHTML.slice(0, -1);
        if (upperScreen.innerHTML != "") {
            typingDisplay();
        }
        else {
            lowerScreen.innerText = "";
        }
    }
    else if (button.innerText == "/" || button.innerText == "*" || button.innerText == "-" || button.innerText == "+") {
        upperScreen.innerHTML += " " + button.innerHTML + " ";
        typingDisplay();
    }
    else if (button.innerText === ".") {
        if (!upperScreen.innerHTML.includes(".")) {
            upperScreen.innerHTML += button.innerHTML;
        }
    }
    else if (button.innerText === "%") {
        if (!upperScreen.innerHTML.includes("%")) {
            upperScreen.innerHTML += button.innerHTML;
        }
    }
    // else if (button.innerText == "ans.") {
    //     upperScreen.innerHTML += result
    // }
    else if (button.innerText == "=") {
        evaluate();
    }
};
buttons.forEach(button => {
    button.addEventListener("click", () => handleClick(button));
});
