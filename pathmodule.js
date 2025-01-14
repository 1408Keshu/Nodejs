const path = require("path");

// const a1= path.basename()
const a2=path.posix.basename('/tmp/myfile.html');
const a1=path.posix.dirname('/tmp/myfile.html');
console.log(a2) // return myfile.html
console.log(a1) // return /tmp
const a3=path.extname(__filename)
console.log(__filename,a3) //D:\Nodejs\pathmodule.js .js