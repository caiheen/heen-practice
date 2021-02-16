const slideItem = document.querySelector(".slide-item:first-child");
// 첫번째 슬라이드 아이템 불러오기
const slideLast = document.querySelector(".slide-item:last-child");
// 마지막 슬라이드 아이템 불러오기
const slideAll = document.querySelectorAll(".slide-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotAll = document.querySelectorAll(".dot");
const dot = document.querySelector(".dot:first-child");
const dotLast = document.querySelector(".dot:last-child");

const slide = () => {
    const currentSlide = document.querySelector(".slide-item.active"); // active 가져오기
    const currentdot = document.querySelector(".dot.active");
    if(currentSlide){
        currentSlide.classList.remove("active"); // 현재 슬라이더에 active 빼기
        currentdot.classList.remove("active");
        const nextSlide = currentSlide.nextElementSibling; // 다음으로 넘어 갈 슬라이드 찾기
        const nextDot = currentdot.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("active"); // 다음슬라이드에 active 추가
            nextDot.classList.add("active");
        } else {
            slideItem.classList.add("active"); // 다음 슬라이드가 없으면 처음으로
            dot.classList.add("active");
        }
    } else {
        slideItem.classList.add("active");
        dot.classList.add("active"); 
    }
}

function prevSlide() {
    const currentSlide = document.querySelector(".slide-item.active");
    const currentdot = document.querySelector(".dot.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        currentdot.classList.remove("active");
        const prevSlide = currentSlide.previousElementSibling;
        const prevDot = currentSlide.previousElementSibling;
        if(prevSlide){
            prevSlide.classList.add("active");
            prevDot.classList.add("avtive");
        } else {
            slideLast.classList.add("active");
            dotLast.classList.add("active");
        }
    } else {
        slideLast.classList.add("active");
        dotLast.classList.add("active");
    }
}

slide();
setInterval(slide, 2000);
prev.addEventListener('click', prevSlide);
next.addEventListener('click', slide);

function dotClickFunction(index){
    const currentSlide = document.querySelector(".slide-item.active");
    const currentdot = document.querySelector(".dot.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        currentdot.classList.remove("active");

        dotAll[index].classList.add("active");
        slideAll[index].classList.add("active");
    }
}

dotAll.forEach((item, index) => {
    item.addEventListener('click', function(){
        dotClickFunction(index);
    });
});