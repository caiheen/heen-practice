const movieList = document.querySelector(".movie-list");

async function getMovie(){
    const respons = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await respons.json();
    console.log(results);

    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        h3.innerHTML = item.title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
        span.innerHTML = item.release_date;
        movieList.appendChild(li);
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(span);
    });
}
getMovie();