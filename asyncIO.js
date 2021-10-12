const fs = require('fs');
const data = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString().split('\n').length - 1);
});