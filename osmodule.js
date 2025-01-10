const os =require('os')
console.log("free memory: ",os.freemem())
// console.log("end-of-line marker ",os.EOL)
console.log("amt. of parallelism a program should use: ",os.availableParallelism())
console.log("os sys CPU architecture:",os.arch());
console.log("information about each logical CPU core: ",os.cpus());
console.log(os.endianness())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.platform())
console.log(os.machine())
console.log("default directory",os.tmpdir())
console.log("version",os.version())