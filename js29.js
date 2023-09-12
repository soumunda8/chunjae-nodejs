let port = 4000;
const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

dbCon.deleteSample(3)
    .then((msg) => {
        console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    
app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});