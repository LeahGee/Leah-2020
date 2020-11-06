var firstNumber = "...";
var secondNumber = "...";
var output;

while (isNaN(firstNumber)) {
    firstNumber = parseInt(prompt("Enter your first number: \n(e.g. The amount, minuend, multiplicand, or dividend)"));
}
while (isNaN(secondNumber)) {
    secondNumber = parseInt(prompt("Enter your second number: \n(e.g. The percentage, subtrahend, multiplier, or divisor)"));
}

document.write(firstNumber + "</br>" + secondNumber);

function sum() {
    output = firstNumber + secondNumber;
    document.getElementById("sumDis").innerHTML= ( firstNumber + " + " + secondNumber + " = " + output);
}

function difference() {
    output = firstNumber - secondNumber;
    document.getElementById("sumDis").innerHTML= ( firstNumber + " - " + secondNumber + " = " + output);
}

function product() {
    output = firstNumber * secondNumber;
    document.getElementById("sumDis").innerHTML= ( firstNumber + " x " + secondNumber + " = " + output);
}

function quotient() {
    output = parseInt(firstNumber / secondNumber);
    document.getElementById("sumDis").innerHTML= ( firstNumber + " ÷  " + secondNumber + " = " + output);
}

function percentage() {
    output = (firstNumber / 100) * secondNumber;
    document.getElementById("sumDis").innerHTML= ( firstNumber + " % of  " + secondNumber + " = " + output.toFixed(2));
}

