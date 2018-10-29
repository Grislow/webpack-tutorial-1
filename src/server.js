const express = require('express');
//fs is also built in
const fs = require('fs');
//built in module in node js
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.get('/kiwi/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi-image.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(3000, function () {
    console.log('Application is running http://localhost:3000/');
})