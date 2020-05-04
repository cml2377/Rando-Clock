const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const HOURHAND2 = document.querySelector("#hour2");
const MINUTEHAND2 = document.querySelector("#minute2");
const SECONDHAND2 = document.querySelector("#second2");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;


function clock() {

    hrPosition = hrPosition + (3 / 360);
    minPosition = minPosition + (6 / 60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    HOURHAND2.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND2.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND2.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(clock, 1000);