const button = document.querySelector('.calc-keys');
let answer = 0;
const inputValues = {
  firstNum: null,
  operator: null,
  secondNum: null
};

// display the number that is clicked
function displayDigit(number) {
  if (!isNaN(number)) {
    const display = document.querySelector('.calc-screen');
    display.value = number;
  }
}

function decimal() {
  const { firstNum, operator, secondNum } = inputValues;
  if (!firstNum && !operator) {
    inputValues.firstNum = ".";
    displayDigit(inputValues.firstNum);
  } 
  else if (!firstNum.includes(".") && !operator) {
    inputValues.firstNum += ".";
    displayDigit(inputValues.firstNum);
  }
  else if (firstNum.includes(".") && !operator) {
    inputValues.firstNum = "0.";
    displayDigit(inputValues.firstNum);
  }

  else if (!secondNum && operator) {
    inputValues.secondNum = "0.";
    displayDigit(inputValues.secondNum);
  } 
  else if (operator && !secondNum.includes(".")) {
    inputValues.secondNum += ".";
    displayDigit(inputValues.secondNum);
  }

}

// store operands or operator into inputValues object properties
function storeOperations(value) {
  const { firstNum, operator, secondNum } = inputValues;

  if (firstNum === null && !isNaN(value)) {
    inputValues.firstNum = value;
  }
  else if (firstNum && !isNaN(value) && operator === null) {
    if(firstNum == answer) {
      inputValues.firstNum = value;
    }
    else {
    inputValues.firstNum += value;
    }
  }

  if (operator === null && isNaN(value)) {
    inputValues.operator = value;
  }

  if (operator && !isNaN(value) && secondNum === null) {
    inputValues.secondNum = value;
  } else if (secondNum && !isNaN(value)) {
    inputValues.secondNum += value;
  }
}

function calculate() {
  const { firstNum, operator, secondNum } = inputValues;
  const num1 = parseFloat(firstNum);
  const num2 = parseFloat(secondNum);

  if (operator == "+") {
    answer = num1 + num2;
  }
  else if (operator == "-") {
    answer = num1 - num2;
  }
  else if (operator == "*") {
    answer = num1 * num2;
  }
  else if (operator == "/") {
    answer = num1 / num2;
  }
  resetInputValues();
}

function resetInputValues() {
  inputValues.firstNum = null;
  inputValues.secondNum = null;
  inputValues.operator = null;
}

// this event listener stores number into inputValue object,
// then displays the current input
button.addEventListener("click", e => {
  const key = e.target.value;

  // only store numbers
  if (Number.isInteger(parseFloat(key)) && !inputValues.operator) {
    storeOperations(key);
    displayDigit(inputValues.firstNum);
    console.log(inputValues);
  } else if (inputValues.operator) {
    storeOperations(key);
    displayDigit(inputValues.secondNum);
    console.log(inputValues);
  }

  // only store operators
  if (inputValues.firstNum) {
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      storeOperations(key);
      console.log(inputValues);
    }
  }

  //calculate and display answer, then answer is firstNum
  if (key === "=") {
    calculate();
    let fixedNum = parseFloat(answer.toFixed(8));
    console.log(fixedNum);
    let stringNum = JSON.stringify(fixedNum);
    inputValues.firstNum = stringNum;
    displayDigit(stringNum);
  }

  //include decimal in number
  if (key === ".") {
    decimal();
    console.log(inputValues);
  }

  //clears inputValues object and display
  if (key === "all-clear") {
    resetInputValues();
    console.log(inputValues);
    displayDigit(0);
  }
})
