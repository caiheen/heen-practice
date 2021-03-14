const ul = document.querySelector("ul");
// A+B, A-B, A*B, A/B(몫), A%B(나머지)
const A = prompt("A한 자리수 정수를 입력하세요.", "");
const B = prompt("B숫자를 입력해주세요");

function results(){
    let C = Number(A) + Number(B);
    let D = Number(A) - Number(B);
    let E = Number(A) * Number(B);
    let F = Number(A) / Number(B);
    let G = Number(A) % Number(B);
    const add = document.createElement("li");
    const minus = document.createElement("li");
    const multi = document.createElement("li");
    const division = document.createElement("li");
    const percent = document.createElement("li");
    ul.appendChild(add);
    ul.appendChild(minus);
    ul.appendChild(multi);
    ul.appendChild(division);
    ul.appendChild(percent);
    add.innerHTML = C;
    minus.innerHTML = D;
    multi.innerHTML = E;
    division.innerHTML = F;
    percent.innerHTML = G;
}
results();