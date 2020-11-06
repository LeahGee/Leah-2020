var names = new Array();
var counter = 1;
var searchNum;
var nameList;

names = [null, "Leah", "Aidan", "Kyle", "Maks", "Jerry", "Jasiu", "Rowan", "Emanuel", "Michael", "Harry", "Daniel", "Cody", "Stefan", "Liam", "Paige", "Kaidyn", "David", "Vaida", "Thomas", "Ryder", "Andrew"];
names.sort();
document.write("There are " + names.length + " students in this class.</br>");

//searchNum = parseInt(prompt("Enter number of student:"))

for (counter = 1; counter < names.length; counter++) {
    document.write("</br>" + counter + "." + names[counter] + "</br>");
} 
/*
nameList = names.toString();
document.write(nameList);*/