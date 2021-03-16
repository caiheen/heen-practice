/* 메인 슬라이더 */
const slideItem = document.querySelector(".slide-item:first-child");
const slideLastitem = document.querySelector(".slide-item:last-child");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dot = document.querySelector(".slide-dot:first-child");
const lastDot = document.querySelector(".slide-dot:last-child");
const dotAll = document.querySelectorAll(".slide-dot")
const slideAll =document.querySelectorAll(".slide-item");

function slide(){
    const currentSlide = document.querySelector(".slide-item.on");
    const currentDot = document.querySelector(".slide-dot.on");
    if(currentSlide){
        currentSlide.classList.remove("on");
        currentDot.classList.remove("on");
        const nextSlide = currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("on");
            nextDot.classList.add("on");
        } else {
            slideItem.classList.add("on");
            dot.classList.add("on");
        }
    } else {
        slideItem.classList.add("on");
        dot.classList.add("on");
    }

}

function prevSlide() {
    const currentSlide = document.querySelector(".slide-item.on");
    const currentDot = document.querySelector(".slide-dot.on");
    if(currentSlide){
        currentSlide.classList.remove("on");
        currentDot.classList.remove("on");
        const prevSlideitem = currentSlide.previousElementSibling;
        const prevDot = currentDot.previousElementSibling;
        if(prevSlideitem){
            prevSlideitem.classList.add("on");
            prevDot.classList.add("on");
        } else {
            slideLastitem.classList.add("on");
            lastDot.classList.add("on");
        }
    } else {
        slideLastitem.classList.add("on");
        lastDot.classList.add("on");
    }
}

slide();
setInterval(slide, 5000);
next.addEventListener("click", slide);
prev.addEventListener("click", prevSlide);

function dotClickFuntion(index){
    const currentDot = document.querySelector(".slide-item.on");
    const currentSlide = document.querySelector(".slide-dot.on");
    if(currentDot){
        currentDot.classList.remove("on");
        currentSlide.classList.remove("on");

        dotAll[index].classList.add("on");
        slideAll[index].classList.add("on");
    }
}

dotAll.forEach((item, index) => {
    item.addEventListener('click', function(){
        dotClickFuntion(index);
    });
});


/* 룩북 슬라이드 */
const slideLBall = document.querySelectorAll(".lookbook-item");
const slideLB = document.querySelector(".lookbook-item:first-child");
const lastLB = document.querySelector(".lookbook-item:last-child");

const dotLB = document.querySelector(".dot:first-child");
const lastDotLB = document.querySelector(".dot:last-child");
const dotLBAll = document.querySelectorAll(".dot");

function lookbook_slide(){
    const currentSlide = document.querySelector(".lookbook-item.on");
    const currentDot = document.querySelector(".dot.on");
    if(currentSlide){
        currentSlide.classList.remove("on");
        currentDot.classList.remove("on");
        const nextSlide = currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("on");
            nextDot.classList.add("on");
        } else {
            slideLB.classList.add("on");
            dotLB.classList.add("on");
        }
    } else {
        slideLB.classList.add("on");
        dotLB.classList.add("on");
    }
}

setInterval(lookbook_slide, 4000);

function lbDotClick(index){
    const currentSlide = document.querySelector(".lookbook-item.on");
    const currentDot = document.querySelector(".dot.on");
    if(currentDot){
        currentSlide.classList.remove("on");
        currentDot.classList.remove("on");

        dotLBAll[index].classList.add("on");
        slideLBall[index].classList.add("on");
    }
}
dotLBAll.forEach((item, index) => {
    item.addEventListener('click', function(){
        lbDotClick(index);
    });
});