const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 4000;
var temp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <nav id="gnb">
        <a href="/">메인</a>
        <a href="/sub1">서브</a>
        <a href="/detail">상세</a>
    </nav>`;
var temp2 = `
</body>
</html>`;

var home = `<h2>메인 페이지</h2>`;
var sub = `<h2>서브 페이지</h2>`;
var detail = `<h2>상세 페이지</h2>`;

app.get('/', (req, res) => {
    res.send(temp1 + home + temp2);
});

app.get('/sub1', (req, res) => {
    res.send(temp1 + sub + temp2);
});

app.get('/detail', (req, res) => {
    res.send(temp1 + detail + temp2);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});