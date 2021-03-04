
/* 
.slide-item
.prev
.next
*/
const slideItem = document.querySelectorAll(".slide-item");
const slideLast = document.querySelector(".slide-item:last-child");
const slideFirst = document.querySelector(".slide-item:first-child");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function slide(){
    const currentSlide = document.querySelector(".slide-item.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("active");
        } else {
            slideFirst.classList.add("active");
        }
    } else {
        slideFirst.classList.add("active");
    }
}
function prevSlide(){
    const currentSlide = document.querySelector(".slide-item.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        const prevSlide = currentSlide.previousElementSibling;
        if(prevSlide){
            prevSlide.classList.add("active");
        } else {
            slideLast.classList.add("active");
        }
    } else {
        slideLast.classList.add("active");
    }
}
slide();
// setInterval(slide, 3000);
next.addEventListener('click', slide);
prev.addEventListener('click', prevSlide);
