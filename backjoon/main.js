const ul = document.querySelector("ul");
// A+B, A-B, A*B, A/B(몫), A%B(나머지)
const A = prompt("A에 들어갈 숫자를 입력하세요.");
const B = prompt("B에 들어갈 숫자를 입력하세요.");
const C = prompt("C에 들어갈 숫자를 입력하세요.")

function results(){
    let D = (Number(A) + Number(B)) % Number(C);
    let E = (Number(A) % Number(C)) + (Number(B) % Number(C)) % Number(C);
    let F = (Number(A) * Number(B)) % Number(C);
    let G = (Number(A) % Number(C)) * (Number(B) % Number(C)) % Number(C);
    const minus = document.createElement("li");
    const multi = document.createElement("li");
    const division = document.createElement("li");
    const percent = document.createElement("li");
    ul.appendChild(minus);
    ul.appendChild(multi);
    ul.appendChild(division);
    ul.appendChild(percent);
    minus.innerHTML = D;
    multi.innerHTML = E;
    division.innerHTML = F;
    percent.innerHTML = G;

    console.log(D);
}
results();