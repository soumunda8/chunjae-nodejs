let port = 4000;
const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

dbCon.insertSample('몬스타엑스')
    .then((msg) => {
        console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    
app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});