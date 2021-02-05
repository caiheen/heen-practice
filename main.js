const slideItem = document.querySelector(".slide-item:first-child");
// 첫번째 슬라이드 아이템 불러오기

const slide = () => {
    const currentSlide = document.querySelector(".active"); // active 가져오기
    if(currentSlide){
        currentSlide.classList.remove("active"); // 현재 슬라이더에 active 빼기
        const nextSlide = currentSlide.nextElementSibling; // 다음으로 넘어 갈 슬라이드 찾기
        if(nextSlide){
            nextSlide.classList.add("active"); // 다음슬라이드에 active 추가
        } else {
            slideItem.classList.add("active"); // 다음 슬라이드가 없으면 처음으로
        }
    } else {
        slideItem.classList.add("active"); 
    }
}

slide();
setInterval(slide, 2000);