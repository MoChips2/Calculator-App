const socket = io();
let person;
const users = [];

let username = prompt("Please enter your name!");
if (username != null) {
  document.getElementById("user").innerHTML = `Hi ${username}!`;
}

const sendUser = {
name: username
}

socket.emit('user', username);

socket.on('getUser', user => {
  users.push(user);
  console.log(users);
  person = user.username;
})

socket.on('displayEq', res => {
  const { firstNum, operator, secondNum } = res.inputValues;
  const answer = res.fixedNum;
  let equation = `${person}: ${firstNum} ${operator} ${secondNum} = ${answer}`
  const para = document.createElement("p");
  const node = document.createTextNode(equation);
  para.appendChild(node);
  const el = document.getElementById("display-results");
  el.appendChild(para);
})
