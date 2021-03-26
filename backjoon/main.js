// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

const A = [1, 2, 3, 9, 5];
const B = [1, 3, 4, 8, 2];

A.forEach((item, index) => {
    console.log(item + B[index]);
});