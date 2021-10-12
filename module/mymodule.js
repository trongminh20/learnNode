const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err);
        else {
            list = list.filter((f) => {
                return path.extname(f) === '.' + ext;
            })
        }
        callback(null, list);
    })
}
