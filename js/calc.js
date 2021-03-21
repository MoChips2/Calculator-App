


function displayDigit(number) {
  if (number) {
    const display = document.querySelector('.calc-screen');
    display.value = number;
  }
}

function calculate(num1,operator,num2) {

}

document.addEventListener("click", e => {
  var key = e.path[0].value;
  console.log(key);
  displayDigit(key);
})
