// const SHOW = "show";
// 클래스를 미리 변수에 담아놓고 계속 사용할 수 있도록
const cont = document.querySelectorAll(".cont");

let next;
let prev;

// scroll Effect
function scrollEffect(elem){
    window.scrollTo({
        'behavior':'smooth', 
        'left':0,
        'top':elem.offsetTop
    })
}

// whell event handle
function scrolling(){
    const currentcont = document.querySelectorAll(".cont.show");
    // const target = e.target;
    cont.forEach(item => {
        if(currentcont){
            next = item.nextElementSibling;
            prev = item.previousElementSibling;
        }
        if(item.deltaY < 0){
            item.preventDefault();
            if(currentcont){
                scrollEffect(prev);
                item.classList.remove("show");
                prev.classList.add("show");
            }
        } else if(item.deltaY > 0){
            item.preventDefault();
            scrollEffect(next);
            item.classList.remove("show");
            next.classList.add("show");
        }
    });
    console.log(currentcont);
}
document.body.addEventListener('wheel', scrolling);