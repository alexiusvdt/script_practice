function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

const number1 = parseInt(prompt("enter a number:"));
const number2 = parseInt(prompt("Enter another number"));

window.alert("Your numbers together equal " + add(number1,number2) + ".")
window.alert("Your numbers subtracted equal " + subtract(number1,number2) + ".")
window.alert("Your numbers divided equal " + divide(number1,number2) + ".")
window.alert("Your numbers multiplied equal " + multiply(number1,number2) + ".")

window.alert("Your numbers added equal " + add(number1, number2) + ". Your numbers subtracted equal " + subtract(number1, number2) + ". Your numbers divided equals " + divide(number1, number2) + ". Your numbers multiplied is " + multiply(number1, number2) + ".")