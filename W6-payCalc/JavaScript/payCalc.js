var salary=0;
var taxRate=0;
var bonus=0;
var taxFreeAllowance=0;
var taxableIncome=0;
var incomeAfterTax=0;
var weeklyIncome=0;

salary = parseFloat(prompt("Input your basic Salary: ", "0")).toFixed(2);
bonus = parseFloat(prompt("Input your bonus: ", "0")).toFixed(2);
taxFreeAllowance = parseFloat(prompt("Input your tax free allowance: ", "0")).toFixed(2);

if (salary<=12500){
    taxRate=0;
}
else if(salary<=50000){
    taxRate=20;
}
else if (salary<=150000){
    taxRate=40;
}
else{
    taxRate=45;
}

taxableIncome = ((salary+bonus))


document.write("Basic Salary: £"+salary+"</br>");
document.write("Tax Rate: "+taxRate+"%</br>");
