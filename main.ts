const buttons = document.querySelectorAll("button");
const upperScreen: HTMLElement | null | any  = document.querySelector(".upper-screen");
const lowerScreen: HTMLElement | null | any = document.querySelector(".lower-screen");
let answer: HTMLElement | null | any = document.getElementById("answer")
let result: Number | Error;

const handleClick = (button:HTMLButtonElement) => {
    if (!isNaN(parseFloat(button.innerText)) ) {
        upperScreen.innerHTML += button.innerText
    } 
    else if (button.innerText == "C" ) {
        upperScreen.innerHTML = ""
        lowerScreen.innerHTML = ""
    } 
    else if (button.innerText == "BS" ) {
        upperScreen.innerHTML = upperScreen.innerHTML.slice(0,-1)
    } 
    else if (button.innerText == "/" ||button.innerText == "*" || button.innerText == "-" || button.innerText == "+") {
        upperScreen.innerHTML += " " + button.innerHTML + " "
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
    else if (button.innerText == "ans.") {
        upperScreen.innerHTML += result
    }
    else if (button.innerText == "=" ) {
        try {
            result = eval(upperScreen.innerHTML)
            lowerScreen.innerHTML = result
            upperScreen.innerHTML = ""
        }catch (error) {
            lowerScreen.innerHTML = "Error";
        }

    } 
    
}

buttons.forEach(button =>{
        button.addEventListener("click", () => handleClick(button))
    }
)

