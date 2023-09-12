let port = 4000;
const dbCon = require("../model/sample");
const express = require("express");
const app = express();

let temp1 = ``;
let temp2 = ``;

app.get('/', (req, res) => {
    res.send("<h2>메인</h2>");
});

app.get('/list', (req, res) => {
    dbCon.getSampleList()
    .then((rows) => {
        res.send("<h2>리스트</h2>");
        res.send(rows);
    })
    .catch((errMsg) => {
        res.send(errMsg);
    });
});

app.get('/get/:no', (req, res) => {
    dbCon.getSampleOne(req.params.no)
    .then((row) => {
        res.send("<h2>상세정보</h2>");
        res.send(row);
    })
    .catch((errMsg) => {
        res.send(errMsg);
    });
});

app.get('/add/:name', (req, res) => {
    dbCon.insertSample(req.params.name)
    .then((msg) => {
        res.send("<h2>등록</h2>");
        res.send(msg);
    })
    .catch((errMsg) => {
        res.send(errMsg);
    });
});

app.get('/edit/:name/:no', (req, res) => {
    let smaple = [req.params.name, req.params.no];
    dbCon.updateSample(smaple)
    .then((msg) => {
        res.send("<h2>수정</h2>");
        res.send(msg);
    })
    .catch((errMsg) => {
        res.send(errMsg);
    });
});

app.get('/delete/:no', (req, res) => {
    dbCon.deleteSample(no)
    .then((msg) => {
        res.send("<h2>삭제</h2>");
        res.send(msg);
    })
    .catch((errMsg) => {
        res.send(errMsg);
    });
});

app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});