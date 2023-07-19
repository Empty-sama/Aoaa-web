const http = require('http');
const url = require('url');
const fs = require('fs');

function req(request,response){
    const base = url.parse(request.url);
    const pathname = base.pathname;
    const fileName = '.' + pathname;
    const mainFile = fs.readFileSync("main")
    console.log(fileName);
    fs.readFile(fileName,function(err,data){
    if(err){
        response.write(mainFile);
        return response.end();
    }
    response.write(data);
    return response.end();
    })  
}
http.createServer(req).listen(4097);
console.log('Server started, http://localhost:4097');