const fs = require('fs');
const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, { withFileTypes: true }, (err, list) => {
    if (err) console.log(err);
    else {
        list.forEach((l) => {
            if (l.name.split('.')[1] == ext) {
                console.log(l.name);
            }
        })
    }
});

