const socket = io();

socket.on('displayEq', res => {
  const { firstNum, operator, secondNum } = res.inputValues;
  const answer = res.fixedNum;
  let person = res.username;
  let equation = `${person}: ${firstNum} ${operator} ${secondNum} = ${answer}`
  const para = document.createElement("p");
  const node = document.createTextNode(equation);
  para.appendChild(node);
  const el = document.getElementById("display-results");
  el.insertBefore(para, el.firstChild);
})
