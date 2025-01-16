const http= require('http');

const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    req.statusCode=200; // statuscode(200 okay,500 server error, 404 not found) 

    res.setHeader('content-type','text/html');

   
    res.end('<h1>This is Keshu </h1> <p>Hey this is the way to rock the World</p>')
        
   
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)

})