var randomNum;
var lotteryNumbers = [];
var counter = 0;

for (counter = 0; counter > 6; counter++){
    randomNum = Math.floor(Math.random() * 100);
    lotteryNumbers.push(randomNum);
    lotteryNumbers.sort();
}

lotteryNumbers.toString();




