const app = require('express')();
const { readFileSync } = require('fs')
const path = require('path')
const express = require('express')
const mainFile = path.join(__dirname, '/contact.html')

app.get('/', express.static(path.join(__dirname, '/main.html')));

app.get('/contact', (req, res) => {
    res.write(mainFile)
});

// app.get('*', (req, res) => res.sendStatus(404))
app.listen(8080, () => {
    console.log('Listening on port 8080');
})

