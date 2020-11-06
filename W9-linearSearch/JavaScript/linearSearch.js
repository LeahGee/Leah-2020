var names = new Array();
var inputVal;
var counter;
var nameFound;

names = ["leah", "aidan", "kyle", "maks", "jerry", "jasiu", "rowan", "emanuel", "michael", "harry", "daniel", "cody", "stefan", "liam", "paige", "kaidyn", "david", "vaida", "thomas", "ryder", "andrew"];
names.sort();

//document.write("There are " + names.length + " students in this class.</br>");

function getInputValue() {
    // Selecting the input element and get its value 
    inputVal = document.getElementById("myInput").value;
    counter = 0;
    nameFound=false
    
    for (counter = 0; counter < names.length; counter++) {
        if (inputVal == names[counter]) {
            nameFound=true;
            document.getElementById("searchResult").innerHTML = ("Student found at address " + counter);
        }
        else if(nameFound == false){
            document.getElementById("searchResult").innerHTML = ("Not found..");
        }
    }
}



