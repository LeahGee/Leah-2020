var numbers = new Array;
var min;
var max;
var counter = 0;
var arrayPrint;

numbers = [21, 42, 16, 44, 51, 20, 35, 88, 12, 53];
arrayPrint = numbers.toString();
min = Math.min(...numbers);
max = Math.max(...numbers);


/*for (counter = 0; counter < numbers.length; counter++) {
    if (numbers[counter] > max) {
        max = numbers[counter];
    }

    if (numbers[counter] < min) {
        min = numbers[counter];
    }
}*/

document.write("Stored Numbers : " + arrayPrint);
document.write("</br>Max Value: " + max + "</br>Min Value: " + min);
document.write("</br>Range : " + (max - min));
