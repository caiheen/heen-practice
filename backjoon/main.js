let A = prompt("시험 점수를 입력해주세요!");

function results(){
    if(Number(A) >= 90 && Number(A) <= 100){
        document.write("A");
    } else if(Number(A) >= 80 && Number(A) < 89){
        document.write("B");
    } else if(Number(A) >= 70 && Number(A) < 79){
        document.write("C");
    } else if(Number(A) >= 60 && Number(A) < 69){
        document.write("D");
    } else{
        document.write("F");
    }
}
results();
