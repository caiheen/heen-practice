const btn = document.querySelectorAll(".btn");
const menu = document.querySelectorAll(".menu");

const open = (index) => {
    menu.forEach((item, i) => {
        if(i === index){
            item.classList.toggle("active");
        } else {
            item.classList.remove("active");
        }
    });
}
console.log(btn);
console.log(menu)
btn.forEach((item,index) => {
    item.addEventListener('click',() => {
        console.log(index);
        open(index);
    });
});


