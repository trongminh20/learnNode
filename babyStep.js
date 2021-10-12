let myArr = process.argv;
let res = 0;

for (let i = 2; i < myArr.length; i++) {
    res += Number.parseInt(myArr[i]);
}

console.log(res);

