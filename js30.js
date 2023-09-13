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
        <li><a href="/">메인</a></li>
        <li><a href="/sample/list">목록</a></li>
        <li><a href="/sample/addSample">샘플 추가</a></li>
    </ul>
    <hr>`;
let temp2 = `</body>
</html>`;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/sampleMain.html");
});

app.get('/sample/list', (req, res) => {
    title = "<h2>샘플 항목</h2>";
    let li = "<ul>";
    dbCon.getSampleList()
    .then((rows) => {
        rows.forEach(row => {
            li = li + `<li><a href="/sample/get/${row.NO}">${row.NAME}</a></li>`;
        });
        li = li + `</ul>`;
        res.send(temp1 + title + li + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.get('/sample/get/:no', (req, res) => {
    title = "<h2>샘플 상세정보</h2>";
    let body = "";
    dbCon.getSampleOne(req.params.no)
    .then((row) => {
        row.forEach(index => {
            body = `<p>no : ${index.NO}, name : ${index.NAME}</p><hr>
            <p><a href="/sample/editSample/${index.NO}">수정하기</a></p>
            <p><a href="/sample/deleteSamplePro/${index.NO}">삭제하기</a></p>`;
        });
        res.send(temp1 + title + body + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.get('/sample/addSample', (req, res) => {
    res.sendFile(__dirname + "/sampleForm.html");
});

app.post('/sample/addSamplePro', (req, res) => {
    title = "<h2>샘플 상세정보</h2>";
    dbCon.insertSample(req.body.name)
    .then((msg) => {
        //res.send(temp1 + title + msg + temp2);
        res.redirect("/sample/list");
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    /*
    router.route.post("/add", (req, res) => {
        let sample = {no:req.body.no, name : req.body.name};
        res.sendFile(__dirname + "/sampleMain.html", sample);
        // sampleMain.html => ${sample.no} ${sample.name}
    });
    */
});

app.get('/sample/editSample/:no', (req, res) => {
    title = "<h2>샘플 수정하기</h2>";
    let body = "";
    dbCon.getSampleOne(req.params.no)
    .then((row) => {
        body = `<form action="/sample/editSamplePro" method="post">`;
        row.forEach(index => {
            body = body + `<p><input type="hidden" name="no" value="${index.NO}" placeholder="no hidden"></p>
            <p><input type="text" name="name" value="${index.NAME}" placeholder="name input"></p>`;
        });
        body = body + `<p><input type="submit"></p>
        </form>`;
        res.send(temp1 + title + body + temp2);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
});

app.post('/sample/editSamplePro', (req, res) => {
    title = "<h2>샘플 수정하기</h2>";
    let smaple = [req.body.name, req.body.no];
    dbCon.updateSample(smaple)
    .then((msg) => {
        //res.send(temp1 + title + msg + temp2);
        res.redirect("/sample/get/" + req.body.no);
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    //res.sendFile(__dirname + "/sampleMain.html");
});

app.get('/sample/deleteSamplePro/:no', (req, res) => {
    title = "<h2>샘플 삭제하기</h2>";
    dbCon.deleteSample(req.params.no)
    .then((msg) => {
        //res.send(temp1 + title + msg + temp2);
        res.redirect("/sample/list");
    })
    .catch((errMsg) => {
        res.send(temp1 + title + errMsg + temp2);
    });
    //res.sendFile(__dirname + "/sampleMain.html");
});

app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});