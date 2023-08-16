const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

function req(request,response){
    const base = url.parse(request.url);
    const pathname = base.pathname;
    const fileName = '.' + pathname;
    const mainFile = path.join(__dirname, "./main.html")
    const hdata = rrquire(mainFile)
    console.log(fileName);
    fs.readFile(fileName,function(err,data){
    if(err){
        response.write(hdata);
        return response.end();
    }
    response.write(data);
    return response.end();
    })  
}
http.createServer(req).listen(4097);
console.log('Server started, http://localhost:4097');
