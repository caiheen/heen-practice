const header = document.querySelector("#header");
const logo = document.querySelector(".logo > a");
const gnbItem = document.querySelector(".gnb");

console.log(gnbItem);

function colorChange(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 30){
        header.style.background = "rgba(255,255,255,0.5";
        logo.classList.add("return");
        gnbItem.classList.add("colorBL");
    } else {
        header.style.background = "transparent";
        logo.classList.remove("return");
        gnbItem.classList.remove("colorBL");
    }
}
colorChange();
window.addEventListener('scroll', colorChange);