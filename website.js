const http= require('http');
const fs=require('fs');
const console = require('console');

const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    // req.statusCode=200; // statuscode(200 okay,500 server error, 404 not found) 
    
    res.setHeader('content-type','text/html');
    
    if(req.url =='/about'){
        req.statusCode=200; // statuscode(200 okay,500 server error, 404 not found) 
        res.end('<h1>This is Keshu </h1> <p>Hey this is the way to rock the World</p>')
        
    }else if(req.url == '/about'){
        req.statusCode=200; // statuscode(200 okay,500 server error, 404 not found) 
        res.end('<h1>This is about</h1> <p>Hey everyone you have entered to about section </p>')
    }
    else if(req.url == '/'){
        req.statusCode=200; // statuscode(200 okay,500 server error, 404 not found) 
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
        // res.end('<h1>This is about</h1> <p>Hey everyone you have entered to about section </p>')
    }
    else{
        req.statusCode=404; // statuscode(200 okay,500 server error, 404 not found) 

        res.end('<h1>not found</h1> <p>this site cannot be reached</p>')
    }
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)

})