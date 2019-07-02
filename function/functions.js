// Ask the user for a number
var num = prompt("Give me a number, any number.");
// Convert number type
num = Number(num);
//Ask for second number
var num2 = prompt("Give me another number, please.");
//Convert second number
num2 = Number(num2);
// Use a function to calculate the the average of the two numbers
function average(number1, number2) {
  var equation = (number1 + number2)/2;
  console.log(equation);
}
//console.log the average of the two numbers
average(num, num2);