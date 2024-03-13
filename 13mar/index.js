var fs = require('fs');
fs.readFile(__filename,(err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }

})
