const btn = document.querySelectorAll(".btn");
const menu = document.querySelectorAll(".menu");

function open(index){
    menu.forEach((item, i) => {
        if(i === index){
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

btn.forEach((item, index) => {
    item.addEventListener('click', function(){
        open(index);
    });
});

