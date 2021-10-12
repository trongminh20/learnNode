const fs = require('fs');

const data = fs.readFileSync(process.argv[2]).toString();

let dataArr = data.split('\n');

let count = 0;
for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i] != "") {
        count++;
    }
}
console.log(count - 1);