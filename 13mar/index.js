// var fs = require('fs');
// fs.readFile(__filename,(err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }

// })
var fs = require('fs');
var stream = fs.createReadStream('foo.txt');
stream.on("data",function(data){
    var chunk = data.toString();
    process.stdout.write(chunk);

});
stream.on("end",function(){
    console.log();});
stream.on('error',function(erro){
    console.log(error.message);
});    