var names = new Array();
var inputVal;

names = ["Leah", "Aidan", "Kyle", "Maks", "Jerry", "Jasiu", "Rowan", "Emanuel", "Michael", "Harry", "Daniel", "Cody", "Stefan", "Liam", "Paige", "Kaidyn", "David", "Vaida", "Thomas", "Ryder", "Andrew"];
names.sort();
//document.write("There are " + names.length + " students in this class.</br>");

function getInputValue(){
    // Selecting the input element and get its value 
    inputVal = parseInt(document.getElementById("myInput").value);
    
    if (inputVal < 0 || inputVal > 21){
        alert('Invalid Input..');
    }
    else{
        document.getElementById("searchResult").innerHTML = (names[inputVal-1]);
    }
    // Displaying the value
    //alert(inputVal);
}



