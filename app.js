const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    if(req.url === 'home' || req.url === '/') {
        fs.createReadStream(path.join(__dirname, './main.html')).pipe(res);
    }
}).listen(8080);