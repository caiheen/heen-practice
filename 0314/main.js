const txt = document.querySelector("p");
const A = prompt("A한 자리수 정수를 입력하세요.", "");
const B = prompt("B숫자를 입력해주세요");

let C = Number(A) * Number(B);
txt.innerHTML = C;
