const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello Express');
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});