let X = prompt("X좌표를 입력해주세요!");
let Y = prompt("Y좌표를 입력해주세요!");

function results(){
    if(Number(X) > 0 && Number(Y) > 0){
        document.write("1");
    } else if((Number(X) < 0 && Number(Y) > 0)){
        document.write("2");
    } else if((Number(X) < 0 && Number(Y) < 0)){
        document.write("3");
    } else{
        document.write("4");
    }
}
results();
