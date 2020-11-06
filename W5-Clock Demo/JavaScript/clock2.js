/*Leah Graydon, 17013813, 2 Oct 2020*/
function displayTime(){
    now = new Date();
    localtime=now.toString();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();

    document.getElementById("localTime").innerHTML = `<b>Local Time</b>:${localtime}</br>`;
    document.getElementById("liveClock").innerHTML = `${hours}:${mins}:${secs}`;  
}