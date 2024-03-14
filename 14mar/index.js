var fs = requite('fs');
var readableStream = fs.createReadStream('file1.txt');
var writeableStream = fs.createWriteStream('file2.txt');
readableStream.pipe(writeableStream);