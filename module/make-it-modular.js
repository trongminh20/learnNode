const filterFn = require('./mymodule.js');
const dir = process.argv[2];
const ext = process.argv[3];

filterFn(dir, ext, function (err, list) {
    if (err) console.log(err);
    list.forEach(f => { console.log(f) });
})