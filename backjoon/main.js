let A = prompt("연도를 입력해주세요!");

function results(){
    if(Number(A) % 4 == 0 && Number(A) % 100 !== 0){
        document.write("1");
    } else if(Number(A) % 400 == 0){
        document.write("1");
    } else{
        document.write("0");
    }
}
results();
