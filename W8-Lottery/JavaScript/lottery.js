var lotteryNumbers = new Array();
var number = 0;
var counter = 0;

for (counter = 0; counter < 7; counter++) {
    number = Math.floor(Math.random() * 50);
    lotteryNumbers.push(number);
    document.write("<h3>" + lotteryNumbers[counter] + "</h2></br>");
}

//lotteryNumbers.toString()
//document.write(number);
