let port = 4000;
const dbCon = require("./model/sample");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

let title = "";
let temp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>샘플</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/addSample">샘플 추가</a></li>
    </ul>
    <hr>`;
let temp2 = `</body>
</html>`;

let updateTemp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Sample</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/addSample">샘플 추가</a></li>
    </ul>
    <form action="/editSamplePro" method="post">`;
let updateTemp2 = `<p><input type="submit"></p>
        </form>
    </body>
</html>`;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/sampleMain.html");
});

app.get('/list', (req, res) => {
    title = "<h2>샘플 항목</h2>";
    let li = "<ul>";
    dbCon.getSampleList()
    .then((rows) => {
        rows.forEach(row => {
            li = li + `<li><a href="/get/${row.NO}">${row.NAME}</a></li>`;
        });
        li = li + `</ul>`;
        res.send(temp1 + title + li + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.get('/get/:no', (req, res) => {
    title = "<h2>샘플 상세정보</h2>";
    let body = "";
    dbCon.getSampleOne(req.params.no)
    .then((row) => {
        row.forEach(index => {
            body = `<p>no : ${index.NO}, name : ${index.NAME}</p><hr>
            <p><a href="/editSample/${index.NO}">수정하기</a></p>
            <p><a href="/deleteSamplePro/${index.NO}">삭제하기</a></p>`;
        });
        res.send(temp1 + title + body + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.get('/addSample', (req, res) => {
    res.sendFile(__dirname + "/sampleForm.html");
});

app.post('/addSamplePro', (req, res) => {
    title = "<h2>샘플 상세정보</h2>";
    dbCon.insertSample(req.body.name)
    .then((msg) => {
        res.send(temp1 + title + msg + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    //res.sendFile(__dirname + "/sampleMain.html");
});

app.get('/editSample/:no', (req, res) => {
    let body = "";
    dbCon.getSampleOne(req.params.no)
    .then((row) => {
        row.forEach(index => {
            body = `<p><input type="hidden" name="no" value="${index.NO}" placeholder="no hidden"></p>
            <p><input type="text" name="name" value="${index.NAME}" placeholder="name input"></p>`;
        });
        res.send(updateTemp1 + body + updateTemp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.post('/editSamplePro', (req, res) => {
    title = "<h2>샘플 수정하기</h2>";
    let smaple = [req.body.name, req.body.no];
    dbCon.updateSample(smaple)
    .then((msg) => {
        res.send(temp1 + title + msg + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    //res.sendFile(__dirname + "/sampleMain.html");
});

app.get('/deleteSamplePro/:no', (req, res) => {
    title = "<h2>샘플 삭제하기</h2>";
    dbCon.deleteSample(req.params.no)
    .then((msg) => {
        res.send(temp1 + title + msg + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    //res.sendFile(__dirname + "/sampleMain.html");
});

app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});