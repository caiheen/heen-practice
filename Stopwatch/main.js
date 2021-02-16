const hour = document.querySelector(".hours");
const min = document.querySelector(".mins");
const sec = document.querySelector(".secs");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");

let hours = 0;
let mins = 0;
let secs = 0;
let timer;

function play(){
    timer = setTimeout(function(){
        secs++;
        if(secs > 59){
            secs = 0;
            mins++;
        }
        if(mins > 59){
            mins = 0;
            hours++;
        }
        // console.log(secs);
        hour.innerHTML = hours < 10 ? "0"+hours : hours;
        min.innerHTML = mins < 10 ? "0"+mins : mins;
        sec.innerHTML = secs < 10 ? "0"+secs : secs;

        play();
    },1000);
}

function clear(){
    hours = 0;
    secs = 0;
    mins = 0;

    hour.innerHTML = "00"
    min.innerHTML = "00"
    sec.innerHTML = "00"
}

function pause(){
    setTimeout(timer);
}

start.addEventListener('click', play);
reset.addEventListener('click', clear);
stop.addEventListener('click', pause);