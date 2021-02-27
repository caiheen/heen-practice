const btn = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

const tab = (index) => {
    btn.forEach((item, i) => {
        if(i !== index){
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    });
    content.forEach((item, i) => {
        if(i !== index){
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    });
}

btn.forEach(function(item, index){
    item.addEventListener('click', function(){
        tab(index);
    });
});
