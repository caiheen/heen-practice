let N = prompt("몇단?");

document.write(Number(N) + "단");
document.write('<br/>');
for(let i = 1; i < 10; i++){
    document.write(Number(N) + '*' + i + "=" + (Number(N) * i));
    document.write('<br/>');
}

