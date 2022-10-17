function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

// These are the same output result, but one is a little cleaner //
const result = add(3, 5);
const outputText = "The sum is " + result + "."
saySomething(outputText);

saySomething("The sum is " + add(3,5) + ".");
