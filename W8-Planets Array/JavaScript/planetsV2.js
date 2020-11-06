var planets = new Array();
var distance = new Array();
var counter = 0;

planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
distance = ["57,910,000", "108,200,000", "149,600,000", "227,940,000", "778,330,000", "1,424,600,000", "2,873,550,000", "4,501,000,000", "5,945,900,000"];


for (counter = 0; counter < planets.length; counter++) {
    document.write("</br> Planet: <b>" + planets[counter] + "</b></br>Distance from the Sun: <b>" + distance[counter] + "km</b></br>");
}