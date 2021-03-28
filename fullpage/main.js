// const SHOW = "show";
// 클래스를 미리 변수에 담아놓고 계속 사용할 수 있도록
const cont = document.querySelectorAll(".cont");

let next;
let prev;

// scroll Effect
function scrollEffect(elem){
    console.log(elem)
    window.scrollTo({
        'behavior':'smooth', 
        'left':0,
        'top':elem.offsetTop
    })
}

// whell event handle
function scrolling(e){
    const currentcont = document.querySelector(".cont.show");
    if(currentcont){
        next = currentcont.nextElementSibling;
        prev = currentcont.previousElementSibling;
    }
    // const target = e.target;
    
    if(e.deltaY < 0){
        e.preventDefault();
        if(currentcont){
            scrollEffect(prev);
            currentcont.classList.remove("show");
            prev.classList.add("show");
        }
    } else if(e.deltaY > 0){
        e.preventDefault();
        scrollEffect(next);
        currentcont.classList.remove("show");
        next.classList.add("show");
    }


}
document.body.addEventListener('wheel', scrolling);