function convertC(number1) {
  return (number1 * 9/5) + 32;

}

const number1 = parseInt(prompt("Enter a number to convert to and from Celcius or Fahrenheit:"));
const tempC = (convertC(number1));
//window.alert("Your temperature in Fahrenheit is " + tempC);

function convertF(number1) {
  return (number1 - 32) * (5/9);

}

//const number2 = parseInt(prompt("Enter a number to convert from Fahrenheit to Celcius:"));
const tempF = (convertF(number1));
//window.alert("Your temperature in Celcius is " + tempF);
window.alert("Your temperature in Fahrenheit is " + tempF + "." + "\n Your Temperature in Celcius is " + tempC + ".");