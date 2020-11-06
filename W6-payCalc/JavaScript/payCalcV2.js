//Leah Graydon, 17013813, 09/10/2020

var salary = 0;
var taxRate = 0;
var bonus = 0;
var taxFreeAllowance = 0;
var income = 0;
var taxableIncome = 0;
var taxDue = 0;
var incomeAfterTax = 0;
var weeklyIncome = 0;

salary = parseFloat(prompt("Input your basic Salary: ", "0")).toFixed(2);
bonus = parseFloat(prompt("Input your bonus: ", "0")).toFixed(2);
taxFreeAllowance = parseFloat(prompt("Input your tax free allowance: ", "0")).toFixed(2);

if (salary <= 12500) {
    taxRate = 0;
}
else if (salary <= 50000) {
    taxRate = 0.2;
}
else if (salary <= 150000) {
    taxRate = 0.4;
}
else {
    taxRate = 0.45;
}

income = (parseFloat(salary) + parseFloat(bonus)).toFixed(2);
taxableIncome = (parseFloat(income) - parseFloat(taxFreeAllowance)).toFixed(2);

if (taxRate > 0) {
    taxDue = (taxableIncome * taxRate).toFixed(2);
}

incomeAfterTax = (income - taxDue).toFixed(2);
weeklyIncome = (incomeAfterTax / 52).toFixed(2);

document.write("Basic Salary: £" + salary + "</br>");
document.write("Bonus: £" + bonus + "</br>");
document.write("Tax Free Allowance: £" + taxFreeAllowance + "</br>");
document.write("Income: £" + income + "</br>");
document.write("</br>Tax Rate: " + taxRate + "%</br>");
document.write("</br>Taxable Income: £" + taxableIncome + "</br>");
document.write("Tax Due: £" + taxDue + "</br>");
document.write("Income After Tax: £" + incomeAfterTax + "</br>");
document.write("</br>Weekly Income: £" + weeklyIncome + "</br>");





