const title = document.querySelectorAll(".title");


title.forEach(item => {
    item.addEventListener('click',() => {
        const currentTitle = document.querySelector(".title.expand");
        currentTitle.classList.remove("expand");
        item.classList.add("expand");
    });
});