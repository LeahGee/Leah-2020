/* Leah Graydon, 17013813, 02 Oct 2020*/
 
/*runs the function at set interval of 1 second*/
var clock = setInterval(clockDisplay, 1000);

function clockDisplay() {
    now = new Date();
    localtime=now.toString();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();
    document.getElementById("localTime").innerHTML = `<b>Local Time</b>:${localtime}</br>`;
    document.getElementById("liveClock").innerHTML = `${hours}:${mins}:${secs}`;  
}