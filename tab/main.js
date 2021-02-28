const btn = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

function tab(index){
    btn.forEach((item, i) => {
        if(i === index){
            item.classList.add("active");
        } else{
            item.classList.remove("active");
        }
    });
    content.forEach((item, i) => {
        if(i === index){
            item.classList.add("active");
        } else{
            item.classList.remove("active");
        }
    });
}

btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab(index);
    });
});