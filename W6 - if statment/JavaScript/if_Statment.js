var num1 = 0;
var num2 = 0;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                
if(parseInt(num1, 10) > parseInt(num2, 10)) 
{ 
    document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else
    if(parseInt(num2, 10) > parseInt(num1, 10)) 
    {
        document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
    }                  
    else
    {
        document.write("The values "+ num1+ " and "+num2+ " are equal.");
    }