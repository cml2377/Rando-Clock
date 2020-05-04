const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

console.log(date);

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Convert the hour, minutes, and seconds into degrees for the position of the hands.

let hrPosition = (hour * 360 / 12) + ((minutes * 360 / 60) / 12);
let minPosition = (minutes * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = seconds * (360 / 60);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";