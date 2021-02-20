const list = document.querySelector(".list");
const next = document.querySelector(".next");
let number = 1;

async function getMovie(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=${number}`);
    const {results} = await response.json();

    results.forEach(item => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img");

        h2.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        p.innerHTML = item.overview;

        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(img);
        list.appendChild(li);
    });    
    console.log(results);
}
getMovie();

next.addEventListener('click',() => {
    list.innerHTML = "";
    number++;

    getMovie();
})

