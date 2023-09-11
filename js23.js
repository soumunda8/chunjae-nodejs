const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/sub1', (req, res) => {
    res.sendFile(__dirname + "/sub1.html");
});

app.get('/detail', (req, res) => {
    res.sendFile(__dirname + "/detail.html");
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});