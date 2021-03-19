let A = prompt("A에 들어갈 숫자를 입력하세요!");
let B = prompt("B에 들어갈 숫자를 입력하세요!");

function results(){
    if(Number(A) > Number(B)){
        document.write(">");
    } else if(Number(A) < Number(B)){
        document.write("<");
    } else if(Number(A) == Number(B)){
        document.write("==");
    }
}
results();
