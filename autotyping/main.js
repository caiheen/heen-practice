const span = document.querySelector(".txt-wrap"); // span을 html에서 불러온다
const words = JSON.parse(span.getAttribute("data-words"));
// span 안에 있는 data-words 배열을 JSON.parse 배열로 가져온다
let txt = ""; // span 안에 찍을 글자
let index = 0; // 배열의 인덱스
let isDeleting = false; // false면 입력 중!
console.log(words); // 배열이 잘 가져와졌는지 확인

function init(){
    const current = index % words.length; // 모듈로 연산

    if(isDeleting){ // 입력이 완료 되었다면
        txt = "";
    } else { // 아직 입력 중이라면
        txt = words[current].substring(0, txt.length + 1); //하나씩 추가
        // substring(시작, 끝) 문자 자르는 함수
    }

    span.innerHTML = `<span>${txt}</span>`; // span에 txt를 넣어준다

    if(txt === words[current] && !isDeleting){ 
        isDeleting = true;
    } else if(txt == "" && isDeleting){
        isDeleting = false;
        index++;
    }
    
    setTimeout(init, 300);
}

init();


