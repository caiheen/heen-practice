let H = prompt("시를 입력해주세요!");
let M = prompt("분을 입력해주세요!");


function results(){
    M -= 45;
    if(M < 0){
        M += 60;
        H--;
        if(H === -1){
            H = 23;
        }
    }
}
results();
document.write(H,":",M)
