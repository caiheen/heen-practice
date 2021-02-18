const open = document.querySelector(".open");
const close = document.querySelector(".close");
const wrap = document.querySelector(".wrap");
const overlay = document.querySelector(".overlay");

function openModal(){
    wrap.classList.add("open-modal");
}

function closeModal(){
    wrap.classList.remove("open-modal");
}

open.addEventListener("click",openModal);
close.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);