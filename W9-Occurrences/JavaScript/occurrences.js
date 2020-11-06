var names = new Array();
var inputVal;
var counter;
var occurence;

names = ["leah", "aidan", "kyle", "leah", "maks", "jerry", "jasiu", "aidan", "rowan", "emanuel", "emanuel", "ryder", "michael", "michael", "harry", "daniel", "emanuel", "cody", "stefan", "ryder", "daniel", "liam", "paige", "daniel", "kaidyn", "ryder", "david", "vaida", "daniel", "ryder", "andrew", "thomas", "ryder", "andrew", "daniel"];


document.write("There are " + names.length + " students in this class.</br>");

function getInputValue() {
    // Selecting the input element and get its value 
    document.getElementById("addresses").innerHTML = ("");
    document.getElementById("searchResult").innerHTML = ("not found..");

    inputVal = document.getElementById("myInput").value;
    counter = 0;
    occurence = 0;


    for (counter = 0; counter < names.length; counter++) {
        if (inputVal == names[counter]) {
            document.getElementById("addresses").innerHTML += ((1+ counter) + "</br>");
            occurence++;
            document.getElementById("searchResult").innerHTML = ("Name found at address:");
        }

        document.getElementById("occur").innerHTML = ("Occurences: " + occurence);

    }


}



